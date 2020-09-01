import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <span className="user">{user.name}</span>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
