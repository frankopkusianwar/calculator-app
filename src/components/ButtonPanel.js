import React from 'react';
import Button from './Button'

const renderButton = (i) => {
  return <Button name={i} />;
}

export default function ButtonPanel(props) {
  return (
    <div>
        <div className="pannel-row">
          {renderButton('AC')}
          {renderButton('+/-')}
          {renderButton('%')}
          {renderButton('/')}
        </div>
        <div className="pannel-row">
          {renderButton('7')}
          {renderButton('8')}
          {renderButton('9')}
          {renderButton('X')}
        </div>
        <div className="pannel-row">
          {renderButton('4')}
          {renderButton('5')}
          {renderButton('6')}
          {renderButton('-')}
        </div>
        <div className="pannel-row">
          {renderButton('0')}
          {renderButton('.')}
          {renderButton('=')}
        </div>
      </div>
  );
}
