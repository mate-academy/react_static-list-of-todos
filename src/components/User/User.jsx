import React from 'react';
import { userType } from '../../types';
import './User.css';

export function User({ user }) {
  return (
    <span className="user__name">
      {user.name}
    </span>
  );
}

User.propTypes = {
  user: userType.isRequired,
};
