import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
  render() {
    return (
      <div className="board-row">
        <button className="square">
          {this.props.value}
        </button>
      </div>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
  render() {
    const status = 'Next player: X';
    return (
      <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
      </div>
    );
  }
}

class Game extends React.Component {
  renderBoard() {
    return ( 
      <div className="game-board">
        <Board />
      </div> 
    )
  }
  render() {
    return (
      <div className="game">
        {this.renderBoard()}
        {this.renderBoard()}
        {this.renderBoard()}
        {this.renderBoard()}
        {this.renderBoard()}
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


