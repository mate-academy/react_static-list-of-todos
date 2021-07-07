import React from 'react';
import { ShapeUser } from '../Shapes/ShapeUser';

export const User = ({ user }) => (
  <span className="todo__user-name">
    {user.name}
  </span>
);

User.propTypes = ShapeUser.isRequired;
