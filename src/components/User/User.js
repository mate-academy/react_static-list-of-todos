import React from 'react';
import { UserType } from '../UserType/UserType';
import './User.css';

export function User({ user }) {
  return (
    <span className="user">{user.name}</span>
  );
}

User.propTypes = {
  user: UserType,
};

User.defaultProps = {
  user: null,
};
