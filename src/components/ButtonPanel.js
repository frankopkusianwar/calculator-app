import React from 'react';
import Button from './Button';

const renderButton = (i, bg, width) => <Button name={i} color={bg} wide={width} />;

export default function ButtonPanel() {
  return (
    <div className="calculator">
      {renderButton('AC', 'rgb(194, 188, 188)')}
      {renderButton('+/-', 'rgb(194, 188, 188)')}
      {renderButton('%', 'rgb(194, 188, 188)')}
      {renderButton('/')}
      {renderButton('7', 'rgb(194, 188, 188)')}
      {renderButton('8', 'rgb(194, 188, 188)')}
      {renderButton('9', 'rgb(194, 188, 188)')}
      {renderButton('X')}
      {renderButton('4', 'rgb(194, 188, 188)')}
      {renderButton('5', 'rgb(194, 188, 188)')}
      {renderButton('6', 'rgb(194, 188, 188)')}
      {renderButton('-')}
      {renderButton('0', 'rgb(194, 188, 188)', '50%')}
      {renderButton('.', 'rgb(194, 188, 188)')}
      {renderButton('=')}
    </div>
  );
}
