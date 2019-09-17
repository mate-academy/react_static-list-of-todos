import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <div className="user-list">
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.phone}</p>
      <a href={`mail-to: ${user.email}`}>{user.email}</a>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default User;
