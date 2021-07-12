import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

function User({ user }) {
  return (
    <div className="userName">{user.name}</div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
