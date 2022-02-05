import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {

  constructor (props) {
    super(props)
    this.state = {n: null}
  }

  render() {
    return (
    //  <div className="board-row">
        <div className="square" >
        </div>
    //  </div>
    );
  }
}

class Heure extends React.Component {

  constructor (props) {
    super(props)
    this.state = {n: null}
  }

  render() {
    return (
    //  <div className="board-row">
        <div className="heure" >
          {this.props.value}
        </div>
    //  </div>
    );
  }
}

class BoardInit extends React.Component {

  constructor (props) {
    super(props)
    this.state = {n: null}
  }

  renderHeure(i) {
    return <Heure key={i} value={i}/>;
  }
  renderListHeure(v){
    var boxArray;
    boxArray = [];
    for( var i = 0; i < v ; i++ ){
        boxArray.push(this.renderHeure(i+" h 00  "))
    }
    return boxArray
  }
  render() {
    const status = 'Next player: X';
    return (

      <div className="board1" >
        <div>{this.props.value}</div>
        {this.renderListHeure(24)}   
      </div>
    );
  }
}

class Board extends React.Component {

  constructor (props) {
    super(props)
    this.state = {n: null}
  }

  renderSquare(i) {
    return <Square key={i}/>;
  }
  renderListSquare(v){
    var boxArray;
    boxArray = [];
    for( var i = 0; i < v ; i++ ){
        boxArray.push(this.renderSquare(i))
    }
    return boxArray
  }
  select () {
    var box;
    var boxArray;
    boxArray = [];
    box = document.getElementsByClassName("square");
    for ( var i = 0; i < box.length; i++ ) (function(i){
      box[i].onmousemove = function(e) {
      if(e.buttons == 1 && e.movementY > 0){
        box[i].style.backgroundColor = "#AFD4F8";
        box[i].style.border = 0;
        box[i].style.border = "1px solid #AFD4F8"
      } else if (e.buttons == 1 && e.movementY < 0){
        box[i].style.backgroundColor = "white";
        box[i].style.border = "1px solid #EAF1F7"
      }    
    }
    })(i);
}
   

  render() {
    const status = 'Next player: X';
    return (

      <div className="Board" onMouseMove={this.select.bind(this)}>
        <div className="datej" >{this.props.value}</div>
        {this.renderListSquare(48)}   
      </div>
    );
  }
}

class Game extends React.Component {
  renderBoard(i) {
    return ( 
      <div className="game-board">
        <Board value={i}/>
      </div> 
    )
  }
  renderBoardInit() {
    return ( 
      <div className="game-board">
        <BoardInit/>
      </div> 
    )
  }
  render() {
    const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    const months = ["Jan", "Fev", "Mas", "Avril", "Mai", "Juin", "Juil", "Aout", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date();
    let month = months[d.getMonth()];   
    let day = d.getDay();
    let jour_du_mois = d.getDate();

    return (
      <div className="game">
        {this.renderBoardInit()}
        {this.renderBoard(""+days[(day-2)%6]+" "+(jour_du_mois-2)%31+" "+month)}
        {this.renderBoard(""+days[(day-1)%6]+" "+(jour_du_mois-1)%31+" "+month)}
        {this.renderBoard(""+days[day]+" "+jour_du_mois+" "+month)}
        {this.renderBoard(""+days[(day+1)%6]+" "+(jour_du_mois+1)%31+" "+month)}
        {this.renderBoard(""+days[(day+2)%6]+" "+(jour_du_mois+2)%31+" "+month)}
        <div className="game-info">
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


