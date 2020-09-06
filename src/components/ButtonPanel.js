import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel(props) {
  const { handleClick } = props;
  return (
    <div className="calculator">
      <Button name="AC" color="rgb(194, 188, 188)" handleClick={handleClick} />
      <Button name="+/-" color="rgb(194, 188, 188)" handleClick={handleClick} />
      <Button name="%" color="rgb(194, 188, 188)" handleClick={handleClick} />
      <Button name="/" handleClick={handleClick} />
      <Button name="7" color="rgb(194, 188, 188)" handleClick={handleClick} />
      <Button name="8" color="rgb(194, 188, 188)" handleClick={handleClick} />
      <Button name="9" color="rgb(194, 188, 188)" handleClick={handleClick} />
      <Button name="x" handleClick={handleClick} />
      <Button name="4" color="rgb(194, 188, 188)" handleClick={handleClick} />
      <Button name="5" color="rgb(194, 188, 188)" handleClick={handleClick} />
      <Button name="6" color="rgb(194, 188, 188)" handleClick={handleClick} />
      <Button name="+" handleClick={handleClick} />
      <Button name="1" color="rgb(194, 188, 188)" handleClick={handleClick} />
      <Button name="2" color="rgb(194, 188, 188)" handleClick={handleClick} />
      <Button name="3" color="rgb(194, 188, 188)" handleClick={handleClick} />
      <Button name="-" handleClick={handleClick} />
      <Button name="0" color="rgb(194, 188, 188)" wide="50%" handleClick={handleClick} />
      <Button name="." color="rgb(194, 188, 188)" handleClick={handleClick} />
      <Button name="=" handleClick={handleClick} />
    </div>
  );
}

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
