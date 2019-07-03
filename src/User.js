import React from 'react';
import PropTypes from 'prop-types';

function User(props) {
  return (
    <div className="user-info">
      <h2>USER INFO</h2>
      <h3>Name:{props.user.name}</h3>
      <h3>Email:{props.user.email}</h3>
      <h3>Phone:{props.user.phone}</h3>
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
