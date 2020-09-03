import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { calcResult } = props;
  return (
    <div className="display">
      <p>{ calcResult }</p>
    </div>
  );
}

Display.propTypes = {
  calcResult: PropTypes.string,
};

Display.defaultProps = {
  calcResult: '0',
};
