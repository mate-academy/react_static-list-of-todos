import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <>
    <th>{user.name}</th>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
