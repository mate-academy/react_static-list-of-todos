import React from 'react';
import PropTypes from 'prop-types';
import './user.scss';

export const User = ({ username }) => (
  <p className="user">
    User:
    { username }
  </p>
);

User.propTypes = PropTypes.string.isRequired;
