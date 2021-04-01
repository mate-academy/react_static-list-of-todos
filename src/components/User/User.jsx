import React from 'react';
import PropTypes from 'prop-types';

import './user.scss';

export const User = ({ user }) => (
  <span className="user">
    {user.name}
  </span>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
