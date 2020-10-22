import React from 'react';
import { UserShape } from '../shapes/UserShape';

export const User = ({ name }) => (
  <div className="App__user-name">
    <span className="App__title">{'User: '}</span>
    {name}
  </div>
);

User.propTypes = UserShape;
