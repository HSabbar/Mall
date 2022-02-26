import React, { Component } from 'react'
import { render } from 'react-dom'
import Edt from './composants/Calendrier/edt'
import Navbar from './composants/Navbar/Navbar'
import Acceuil from './composants/Acceuil/Acceuil'
import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './composants/Auth/Register'
import Login from './composants/Auth/Login'
import Home from './composants/Acceuil/Home'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Acceuil} exact={true} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/calendar" component={Edt} />
            <Route path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
render(<App />, document.getElementById('root'));
