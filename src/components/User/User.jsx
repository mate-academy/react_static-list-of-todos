import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name }) => (
  <li className="todo__username">
    <span className="todo__prefix">User name: </span>
    {name}
  </li>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
