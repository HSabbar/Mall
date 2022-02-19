import React, { Component } from 'react'
import { render } from 'react-dom'
import Edt from './composants/Calendrier/edt'
import Navbar from './composants/Navbar/Navbar'
import Acceuil from './composants/Acceuil/Acceuil'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './composants/Auth/Register'
import Login from './composants/Auth/Login'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render() {
    try{
    return (
      <div>
        <Navbar />
        <BrowserRouter>
      <Routes>      
         <Route path="/"  element={<><Acceuil /><Login /></>}/>
         <Route path="/calendar"  element={<Edt/>}/>  
      </Routes>
      </BrowserRouter>
      </div>
    )
    } catch {

    }
  }
}
render(<App />, document.getElementById('root'));
