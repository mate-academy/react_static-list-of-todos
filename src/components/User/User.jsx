import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <h2 className="todo-list__user-name">{user.name}</h2>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
