import React from 'react';
import PropTypes from 'prop-types';
import './user.scss';

export const User = ({ user }) => (
  <span className="todo-list__person">
    {user.name}
  </span>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
