import React from 'react';
import { UserShape } from '../../shapes/UserShape';
import './User.scss';

export const User = ({ name }) => (
  <div className="name">
    User:
    {name}
  </div>
);

User.propTypes = UserShape;
