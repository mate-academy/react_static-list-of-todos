import React from 'react';
import { UserShape } from '../shapes/UserShape';
import './User.scss';

export const User = ({ name }) => (
  <div>
    <p className="User">{name}</p>
  </div>
);

User.propTypes = UserShape;
