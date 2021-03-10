import React from 'react';
import { UserType } from '../../types';

export const User = ({ user }) => (
  <div>
    <h2>{user.name}</h2>
  </div>
)

User.propTypes = {
  user: UserType,
};
