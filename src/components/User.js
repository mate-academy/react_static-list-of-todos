import React from 'react';
import PropTypes from 'prop-types';

function User({ user }) {
  return (
    <p>{`Name: ${user.name}`}</p>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
