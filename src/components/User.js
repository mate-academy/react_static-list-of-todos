import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <a href={`mailto:${user.email}`}>{user.name}</a>
  );
}

User.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default User;
