import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ user }) => (
  <p className="user-name">
    <b>User:</b>
    {' '}
    {user.name}
  </p>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
