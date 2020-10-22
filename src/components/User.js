import React from 'react';
import { UserShape } from './Shapes/UserShape';

export const User = ({ name }) => (
  <div className="list__name">
    {name}
  </div>
);

User.propTypes = UserShape;
