import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const User = ({ user }) => (
  <span className="person">{user.name}</span>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
