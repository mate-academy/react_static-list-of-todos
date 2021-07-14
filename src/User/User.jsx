import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ user }) => (
  <span className="user">
    {'User: '}
    {user}
  </span>
);

User.propTypes = {
  user: PropTypes.string.isRequired,
};
