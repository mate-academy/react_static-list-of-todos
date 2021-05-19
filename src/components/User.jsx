import React from 'react';
import { TypeUser } from './TypeUser';

export const User = ({ user }) => (
  <i className="user">
    {user.name}
  </i>
);

User.propTypes = {
  user: TypeUser.isRequired,
};
