import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name } = props;
  return (
    <button type="submit" className="button">
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '0',
};
