import React from 'react';
import { UserShape } from '../shapes/UserShape';

export const User = ({ name }) => (
  <div className="user-name">
    <span className="title">
      User:
    </span>
    {name}
  </div>
);

User.propTypes = UserShape;
