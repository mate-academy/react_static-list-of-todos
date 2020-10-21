import React from 'react';
import { UserShape } from '../shapes/UserShape';

export const User = ({ name }) => (
  <div className="App__user-name">
    <span className="App__title">User:&nbsp;</span>
    {name}
  </div>
);

User.propTypes = UserShape;
