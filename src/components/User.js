import React from 'react';
import './User.scss';
import { UserType } from '../types';

function User({ user }) {
  return (
    <p className="user__name">{user.name}</p>
  );
}

export default User;

User.propTypes = {
  user: UserType.isRequired,
};
