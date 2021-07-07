import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <p>{user.name}</p>
  );
}

User.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default User;
