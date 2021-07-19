import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <h2 className="user">
    {user.name}
  </h2>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
