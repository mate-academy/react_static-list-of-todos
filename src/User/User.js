import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ user }) => (
  <p className="user">
    Author:
    {user.name}
  </p>
);

User.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};
