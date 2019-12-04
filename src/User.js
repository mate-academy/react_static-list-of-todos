import React from 'react';
import PropTypes from 'prop-types';

const Users = ({ user }) => (
  <p className="user-name">
    Assigned to:
    {' '}
    {user.name}
  </p>
);

Users.propTypes = {
  user: PropTypes.shape(
    { name: PropTypes.string }
  ).isRequired,
};

export default Users;
