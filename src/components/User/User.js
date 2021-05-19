import React from 'react';
import PropType from 'prop-types';

import './User.scss';

export const User = ({ user }) => (
  <strong className="user">{user.name}</strong>
);

User.propTypes = {
  user: PropType.shape({
    name: PropType.string.isRequired,
  }).isRequired,
};
