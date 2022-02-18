import React, { Component } from 'react'
import { render } from 'react-dom'
import Edt from './composants/Calendrier/edt'
import Navbar from './composants/Navbar/Navbar'
import Acceuil from './composants/Acceuil/Acceuil'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

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
      <Routes>      
         <Route path="/"  element={<Acceuil/>}/>
         <Route path="/calendar"  element={<Edt/>}/>  
      </Routes>
      </div>
    )
    } catch {

    }
  }
}
render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
