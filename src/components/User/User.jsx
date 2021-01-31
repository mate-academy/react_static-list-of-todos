import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name }) => (
  <span className="user_name">{name}</span>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
