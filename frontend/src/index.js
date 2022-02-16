import React, { Component } from 'react'
import { render } from 'react-dom'
import Edt from './composants/Calendrier/edt'
import Navbar from './composants/Navbar/Navbar'
import './index.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <><Navbar /><Edt /></>
    )
  }
}
render(<App />, document.getElementById('root'));
