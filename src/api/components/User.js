import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  const userName = `${user.name}`;

  return (
    <p>{userName}</p>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
