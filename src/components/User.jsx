import React from 'react';
import { UserShape } from './Shape';
import './User.css';

export const User = user => (
  <span className="User">
    {user.name}
  </span>
);

User.propTypes = UserShape.isRequired;
