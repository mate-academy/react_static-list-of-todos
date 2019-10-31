import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <a href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
