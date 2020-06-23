import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <td>{user.name}</td>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
