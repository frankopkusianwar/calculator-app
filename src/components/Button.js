import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name, color, wide } = props;
  return (
    <button type="submit" className="button" style={{ background: color, flex: wide }}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.string,
};

Button.defaultProps = {
  name: '0',
  color: 'rgb(228, 145, 78)',
  wide: '25%',
};
