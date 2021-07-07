import React from 'react';
import { UserShape } from './shapes/UserShape';

function User({ user: { name } }) {
  return (
    <p className="user__name">{name}</p>
  );
}

User.propTypes = UserShape;

export default User;
