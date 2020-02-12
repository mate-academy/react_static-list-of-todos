import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export function User({ user }) {
  return (
    <p className="user">{user.name}</p>
  );
}

User.propTypes = {
  user: PropTypes.string.isRequired,
};
