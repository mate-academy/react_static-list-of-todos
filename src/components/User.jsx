import React from 'react';
import { UserType } from '../types';

export const User = ({ user }) => (
    <p className="user">{user.name}</p>
);

User.propTypes = {
  user: UserType.isRequired,
};
