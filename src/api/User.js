import React from 'react';
import PropTypes from 'prop-types';
import './Styles.scss';

export const User = ({ user }) => (
  <text className="user">{user}</text>
);

User.propTypes = {
  user: PropTypes.string.isRequired,
};
