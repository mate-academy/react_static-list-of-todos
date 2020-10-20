import React from 'react';
import { UserShape } from '../shapes/UserShape';

export const User = ({ name }) => (
  <div className="User">
    {'Name: '}
    {name}
  </div>
);

User.propTypes = UserShape;
