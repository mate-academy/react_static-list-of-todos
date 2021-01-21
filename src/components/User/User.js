import React from 'react';
import { UserType } from '../../types';
import './User.scss';

export const User = ({ user }) => (
  <div className="User">
    <span>
      {user.name}
    </span>
    <span>
      nick:
      <i>{user.username}</i>
    </span>
  </div>
);

User.propTypes = {
  user: UserType.isRequired,
};
