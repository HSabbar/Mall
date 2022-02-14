import React, { Component } from 'react'
import { render } from 'react-dom'
import Edt from './edt'
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
    return (<Navbar />)
  }
}
render(<App />, document.getElementById('root'));
