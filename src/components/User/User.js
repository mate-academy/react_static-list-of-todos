import React from 'react';
import { UserShape } from '../shapes/UserShape';

export const User = ({ user }) => (
  <p>{user.name}</p>
);

User.propTypes = {
  user: UserShape.isRequired,
};
