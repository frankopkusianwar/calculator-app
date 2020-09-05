import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    name, color, wide, handleClick,
  } = props;
  return (
    <button type="submit" className="button" style={{ background: color, flex: wide }} onClick={() => handleClick(name)}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'rgb(228, 145, 78)',
  wide: '25%',
};
