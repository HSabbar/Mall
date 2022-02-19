import React from 'react';
import '../../index.css';



class Acceuil extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }
  
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <p>
        Acceuil
        </p>
      </div>
    );
  }
}

export default Acceuil