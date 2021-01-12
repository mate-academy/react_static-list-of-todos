import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <i>
    {user.name}
  </i>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
