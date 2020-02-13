import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ userObject }) => (
  <td>{userObject.name}</td>
);

User.propTypes = {
  userObject: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
