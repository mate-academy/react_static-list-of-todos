import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = (props) => {
  const { user } = props;

  return (
    <span className="user-name">{user.name}</span>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
