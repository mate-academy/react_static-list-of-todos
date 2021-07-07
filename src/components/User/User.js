import React from 'react';
import { UserShape } from '../shapes/UserShape';

export const User = ({ name }) => (
  <div className="list__name">
    {name}
  </div>
);

User.propTypes = UserShape;
