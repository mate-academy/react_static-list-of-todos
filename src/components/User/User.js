import React from 'react';
import PropTypes from 'prop-types';

export function User({ user }) {
  return (
    <p>{user.name}</p>
  );
}

export const UserType = PropTypes.shape({
  name: PropTypes.string.isRequired,
});

User.propTypes = UserType.isRequired;
