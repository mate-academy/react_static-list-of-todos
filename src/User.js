import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <a href={`mailto:${user.email}`}>{user.name}</a>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default User;
