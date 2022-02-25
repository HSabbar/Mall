import React from 'react';
import '../../index.css';
import './acceuil.css';
import ReseauxS from './ReseauxS';
import { bg } from '../img/bg_img'
import Register from '../Auth/Register';
import SearchEngine from './SearchEngine';
import Infun from './Infun';


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
          <div className="acceuil-child">
            <h2 className="h2-acceuil-child" >Ubiz, c’est des  
            <span className="h2-acceuil-child-a"> commerçants</span>
            , des 
            <span className="h2-acceuil-child-a"> artistes</span>
            <span>, des </span> 
            <span className="h2-acceuil-child-a"> particuliers</span>
             …, prêts de chez vous.</h2>
            <SearchEngine />
            <Infun/>
          </div>
          
          <div className="acceuil-child1">
            <Register/>
          </div>
          <h4 className="h4-acceuil">Ubiz,Le service <span className="h2-acceuil-child-a" >click&collect</span> dans tout les domaines. </h4>
      </div>
    );
  }
}

export default Acceuil