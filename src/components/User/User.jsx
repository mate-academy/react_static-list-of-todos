import React from 'react';
import { UserShape } from '../shapes/UserShape';
import './User.scss';

export const User = ({ name }) => (
  <div className="todo__user user">
    <p>{name}</p>
  </div>
);

User.propTypes = UserShape;
