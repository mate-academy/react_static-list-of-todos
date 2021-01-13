import React from 'react';
import { UserType } from '../../types';

export const User = ({ user }) => (
  <span>
    {user.name}
  </span>
);

User.propTypes = {
  user: UserType.isRequired,
};
