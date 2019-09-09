import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

export const Users = ({ user }) => (
  <div className="card-title">
    <h5>User information:</h5>
    <ul>
      <li>{user.name}</li>
      <li>{user.username}</li>
      <li>{user.email}</li>
    </ul>
  </div>
);

Users.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
};
