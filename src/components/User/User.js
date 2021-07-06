import React from 'react';
import { UserShape } from '../shapes/UserShape';

export const User = ({ name }) => (
  <span className="mb-1">{ name }</span>
);

User.propTypes = UserShape;
