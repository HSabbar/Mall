import React from 'react';
import '../../index.css';
import './reseau.css';

import { fb } from '../img/fb'
import { linkedin } from '../img/linked'
import { twitter } from '../img/twitter'
import { insta } from '../img/insta'


class ReseauxS extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }
  
  render() {
    return (
      <div className="rs-container">

        <img className="background-img" src={fb.img} alt={fb.alt}/>
        <img className="background-img" src={insta.img} alt={insta.alt}/>
        <img className="background-img" src={linkedin.img} alt={linkedin.alt}/>
        <img className="background-img" src={twitter.img} alt={twitter.alt}/>
      </div>
    );
  }
}

export default ReseauxS