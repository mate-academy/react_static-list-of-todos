import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <span className="user">{` ${user.name}`}</span>
);

User.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
};
