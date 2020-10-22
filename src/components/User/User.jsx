import React from 'react';
import { UserShape } from '../../shapes/UserShapes';

export function User({ user }) {
  return <td>{user.name}</td>;
}

User.propTypes = UserShape;
