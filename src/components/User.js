import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <p>
      <strong>User: </strong>
      <i className="user__name">{user.name}</i>
    </p>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
