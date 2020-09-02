import React from 'react';
import PropTypes from 'prop-types';


export default function Button(props) {
  return (
    <button className="button">
        {props.name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
};
