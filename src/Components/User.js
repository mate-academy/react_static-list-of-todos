import React from 'react';
import { TypeUser } from '../Types';

export const User = ({ user }) => (
  <div className="user__name" style={{ color: 'red' }}>
    {'name - '}
    {user.name}
  </div>
);

User.propTypes = {
  user: TypeUser.isRequired,
};
