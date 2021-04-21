import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ users }) => (
  <>
    {users.map(user => (
      <div key={user.id}>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
      </div>
    ))}
  </>
);

User.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
