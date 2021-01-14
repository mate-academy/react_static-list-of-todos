import React from 'react';
import { UserType } from '../types';

function User({ user }) {
  return <p>{user.name}</p>;
}

User.propTypes = {
  user: UserType.isRequired,
};

export default User;
