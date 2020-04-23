import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <p>
    User name:
    <span className="name">
      {' '}
      {name}
    </span>
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
