import React from 'react';
import users from './api/users';

const User = () => {
  return users.map(user => user.name)
};

export default User;
