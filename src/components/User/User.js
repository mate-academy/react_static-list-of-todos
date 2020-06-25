import React from 'react';
import { ShapeUser } from '../Shapes/ShapeUser';

export const User = ({ name }) => (
  <div className="user-name">
    {name}
  </div>
);

User.propTypes = ShapeUser.isRequired;
