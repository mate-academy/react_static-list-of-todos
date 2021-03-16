import PropTypes from 'prop-types';
import React from 'react';
import './User.scss';

export function User({ user }) {
  return (
    <span className="name">{user.name}</span>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
