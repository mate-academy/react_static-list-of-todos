import React from 'react';
import PropTypes from 'prop-types';

export default User;

function User({ user }) {
  return (
    <p className="todo__user">{user.name}</p>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
