import React from 'react';
import PropTypes from 'prop-types';
import './user.css';

export const User = (props) => {
  const { user: { name } } = props;

  return (
    <span className="userName">{name}</span>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
