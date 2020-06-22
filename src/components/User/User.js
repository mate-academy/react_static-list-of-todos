import React from 'react';
import PropTypes, { string } from 'prop-types';

const User = ({ user }) => (
  <td>{user.name}</td>
);

User.propTypes = {
  user: PropTypes.shape({
    name: string,
  }).isRequired,
};

export default User;
