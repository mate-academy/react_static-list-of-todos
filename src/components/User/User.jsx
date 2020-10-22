import React from 'react';
import { UserShape } from '../../shapes/UserShapes';

export function User({ name }) {
  return <td>{name}</td>;
}

User.propTypes = UserShape;
