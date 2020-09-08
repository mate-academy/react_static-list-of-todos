import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <>
    <h2>User:</h2>
    <em>{user.name}</em>
  </>
);

User.propTypes = {
  user: PropTypes.objectOf.isRequired,
};
