import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ name }) => (
  <span className="todo-list__username">{name}</span>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
