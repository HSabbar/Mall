import React from 'react';
import '../../index.css';
import './infun.css';
import { one } from '../img/selfie'
import { two } from '../img/network'
import { tree } from '../img/acheteur'



class Infun extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }
  
  render() {
    return (
      <div className="r-container">
        <div className="div-infun">
            <img className="background-img-r" src={one.img} alt={one.alt}/>
            <h6>En quelque clics accéder au service que vous souhaitez.</h6>
        </div>
        <div className="div-infun">
            <img className="background-img-r" src={two.img} alt={two.alt}/>
            <h6>Commander à votre guise, nos collaborateurs sont prêts.</h6>
        </div>
        <div className="div-infun">
            <img className="background-img-r" src={tree.img} alt={tree.alt}/>
            <h6>Le service click & collect vous facilitera la vie </h6>
        </div>
      </div>
    );
  }
}

export default Infun