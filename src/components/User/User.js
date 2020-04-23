import React from 'react';
import PropTypes from 'prop-types';
import './user.css';

export const User = ({ user }) => {
  const { name } = user;

  return (
    <span className="user__name">{name}</span>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
