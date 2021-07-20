import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <>
    {`User: ${user.name}`}
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
