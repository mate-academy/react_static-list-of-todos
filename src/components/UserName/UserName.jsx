import React from 'react';
import { UserNameShapes } from '../../shapes/UserNameShape';

export function UserName({ user }) {
  return <td>{user.name}</td>;
}

UserName.propTypes = UserNameShapes;
