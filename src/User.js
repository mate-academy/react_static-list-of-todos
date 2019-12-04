import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <li>
    {'name - '}
    {user.name}
  </li>
);

User.propTypes = { user: PropTypes.string.isRequired };

export default User;
