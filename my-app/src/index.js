import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import './index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';
import _ from 'lodash';


const localizer = momentLocalizer(moment);


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      events: [],
      dayLayoutAlgorithm: 'no-overlap',
    };
  }

  componentDidMount = () => {
   // const response =  await apiClient.get("/");
   // console.log(response)
   // this.setState({ events: [response.data] });
   // console.log(this.state.events[0])
   var self = this
   axios.get('http://localhost:5000/')
   .then(response => {
     
     let appointments = response.data;
     
     for (let i = 0; i < appointments.length; i++) {
       appointments[i].start =    moment.utc(appointments[i].start).toDate();
       appointments[i].end = moment.utc(appointments[i].end).toDate();
       
     }
     self.setState({
       events:appointments
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
          body: JSON.stringify({ title,start, end }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      result = await result.json();
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
  render() {
//    const { localizer } = this.props
    return (
      <div>
        <p>
          A test for the React Big Calendar.
        </p>
        <div style={{ height: ';500pt'}}>
          <Calendar
          selectable
          localizer={localizer}
          events={this.state.events}
          defaultView={Views.WEEK}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2015, 3, 12)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
          dayLayoutAlgorithm={this.state.dayLayoutAlgorithm}
          />
        </div>
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
