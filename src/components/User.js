import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <>
    <p>{user.name}</p>
    <p>{user.username}</p>
    <p>{user.email}</p>
    <p>{user.phone}</p>
    <p>{user.website}</p>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};
