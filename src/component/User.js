import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  const { name } = user;

  return (
    <td>{name}</td>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
