import React from 'react';
import { userType } from '../../types';

export const User = ({ user }) => (
  <h2>
    {user.name}
  </h2>
);

User.propTypes = {
  user: userType,
};

User.defaultProps = {
  user: {},
};
