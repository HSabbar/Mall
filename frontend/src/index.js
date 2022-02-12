import React, { Component } from 'react';
import { render } from 'react-dom';
import Edt from './edt'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render() {
    return <Edt />
  }
}
render(<App />, document.getElementById('root'));
