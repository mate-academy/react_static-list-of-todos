import React from 'react';
import { userType } from '../types';

export const User = ({ user }) => (
  <>
    <p className="user">{user.name}</p>
  </>
);

User.propTypes = {
  user: userType.isRequired,
};
