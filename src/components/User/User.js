import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

export const User = ({ name }) => (
  <p>
    <span className="name-title"><strong>User name: </strong></span>
    <span className="name-value">{name}</span>
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
