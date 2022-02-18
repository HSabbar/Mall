
import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../../index.css';
import 'moment/locale/en-gb';
import 'moment/locale/fr';
import moment from 'moment';
import axios from 'axios';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

const messages = { // new
  allDay: 'toute la journée',
  previous: 'Précédent',
  next: 'Suivant',
  today: 'Aujourd\'hui',
  month: 'Mois',
  week: 'Semaine',
  day: 'Jour',
  agenda: 'agenda',
  date: 'date',
  time: 'temps',
  event: 'événement',
};

class Edt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      events: [],
      dayLayoutAlgorithm: 'no-overlap',
    };
    this.moveEvent = this.moveEvent.bind(this);
    this.resizeEvent = this.resizeEvent.bind(this);

  }

  moveEvent = async ({ event, start, end }) => {
    const is_sure = window.confirm('vous êtes sûr de changer l\'événement')

    if (is_sure) {
      const { events } = this.state;
      const idx = events.indexOf(event);
      const updatedEvent = { ...event, start, end };

      const nextEvents = [...events];
      nextEvents.splice(idx, 1, updatedEvent);

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updatedEvent })
      };
      let result = await fetch('http://localhost:5000/UpdateEvent', requestOptions)
      if (result) {
        this.setState({
          events: nextEvents
        })
      }

    }
  };

  resizeEvent = async ({ event, start, end }) => {
    const is_sure = window.confirm('vous êtes sûr de changer l\'événement')

    if (is_sure) {
      const { events } = this.state;
      const idx = events.indexOf(event);
      const updatedEvent = { ...event, start, end };

      const nextEvents = [...events];
      nextEvents.splice(idx, 1, updatedEvent);

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updatedEvent })
      };
      let result = await fetch('http://localhost:5000/UpdateEvent', requestOptions)
      if (result) {
        this.setState({
          events: nextEvents
        })
      }
    }
  };
  
  componentDidMount = () => {
    var self = this
    axios.get('http://localhost:5000/')
      .then(response => {
        let appointments = response.data;
        for (let i = 0; i < appointments.length; i++) {
          appointments[i].start = moment.utc(appointments[i].start).toDate();
          appointments[i].end = moment.utc(appointments[i].end).toDate();
        }
        self.setState({
          events: appointments
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleSelect = async ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      var result = await fetch(
        'http://localhost:5000/AddEvent', {
        method: "post",
        body: JSON.stringify({ title, start, end }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    result = await result.json();
    if (result) {
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
    }
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{ height: ';500pt', width: '80%', marginLeft: '15%' }}>
          <DragAndDropCalendar
            selectable
            localizer={localizer}
            events={this.state.events}
            onEventDrop={this.moveEvent}
            onEventResize={this.resizeEvent}
            defaultView={Views.WEEK}
            scrollToTime={new Date(1970, 1, 1, 6)}
            defaultDate={new Date()}
            onSelectEvent={event => alert(event.title)}
            onSelectSlot={this.handleSelect}
            messages={messages}
            dayLayoutAlgorithm={this.state.dayLayoutAlgorithm}
          />
        </div>
      </div>
    );
  }
}

export default Edt