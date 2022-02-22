import React from 'react';
import '../../index.css';
import './acceuil.css';
import ReseauxS from './ReseauxS';
import { bg } from '../img/bg_img'


class Acceuil extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }
  
  render() {
    return (
      <div className="acceuil-container">
        <p>
        Acceuil
        </p>
        <div><ReseauxS/></div>
      <img className="background-img" src={bg.img} alt={bg.alt}/> 
      </div>
    );
  }
}

export default Acceuil