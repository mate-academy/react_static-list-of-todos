import React from 'react';
import { UserShape } from '../shapes/UserShape';

export const User = ({ name }) => (
  <div className="user__name lead">
    Author:
    {name}
  </div>
);

User.propTypes = UserShape;
