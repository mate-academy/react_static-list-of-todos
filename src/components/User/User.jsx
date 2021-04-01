import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <h2 className='taskName'>{user.name}</h2>
)

User.propTypes = {
  user: PropTypes.string.isRequired,
}
