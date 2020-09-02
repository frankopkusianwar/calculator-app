import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function HelloWorld() {
  return (
    <div className="game">
      <div className="game-board">
        <h1>Hello World!</h1>
      </div>
    </div>
  );
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root'),
);
