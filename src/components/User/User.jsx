import React from 'react';
import PropTypes from 'prop-types';

export function User({ user }) {
  return (
    <p>
      {`User: ${user.name}`}
    </p>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
