import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export function User({ name }) {
  return (
    <span className="user-view">
      {name}
    </span>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};
