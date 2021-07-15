import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ currentUser }) => (
  <div className="user">
    {currentUser}
  </div>
);

User.propTypes = {
  currentUser: PropTypes.string.isRequired,
};
