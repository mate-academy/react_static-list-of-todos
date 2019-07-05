import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <div className="user-info">
      <h2>USER INFO</h2>
      <h3>Name:{user.name}</h3>
      <h3>Email:{user.email}</h3>
      <h3>Phone:{user.phone}</h3>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
