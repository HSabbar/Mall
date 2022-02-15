
import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import '../../index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const propTypes = {}
const localizer = momentLocalizer(moment);

class Edt extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      events: [],
      dayLayoutAlgorithm: 'no-overlap',
    };
  }

  componentDidMount = () => {
    var self = this
    axios.get('http://localhost:5000/GetEvent')
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
      <div>
        <p>
          Ubiz Calendar with mongo .
        </p>
        <div style={{ height: ';500pt' }}>
          <Calendar
            selectable
            localizer={localizer}
            events={this.state.events}
            defaultView={Views.MONTH}
            scrollToTime={new Date(1970, 1, 1, 6)}
            defaultDate={new Date()}
            onSelectEvent={event => alert(event.title)}
            onSelectSlot={this.handleSelect}
            dayLayoutAlgorithm={this.state.dayLayoutAlgorithm}
          />
        </div>
      </div>
    );
  }
}

Edt.propTypes = propTypes
export default Edt