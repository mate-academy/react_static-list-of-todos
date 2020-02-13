import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

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
