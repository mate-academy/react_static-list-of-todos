import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <span className="todo__user-name">
    {user.name}
  </span>
);

User.propTypes = {
  user: PropTypes.objectOf(Object).isRequired,
};
