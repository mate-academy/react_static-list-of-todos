import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <p className="todos-list__user">
    {user}
  </p>
);

User.propTypes = {
  user: PropTypes.string.isRequired,
};
