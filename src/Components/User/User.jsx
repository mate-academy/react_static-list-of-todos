import PropTypes from 'prop-types';
import React from 'react';

export default function User({ user }) {
  return (
    <>
      <h3>{user.name}</h3>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

User.defaultProps = {
  user: {},
};
