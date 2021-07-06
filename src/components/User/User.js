import React from 'react';
import './User.scss';
import { UserShape } from '../propTypes/UserShape';

export const User = ({ user }) => (
  <div className="user">
    {user.name}
  </div>
);

User.propTypes = {
  user: UserShape.isRequired,
};
