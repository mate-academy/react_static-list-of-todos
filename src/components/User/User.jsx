import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <p>
    {user.name}
  </p>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
