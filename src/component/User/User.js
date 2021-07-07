import React from 'react';
import { UserShape } from '../shapes/UserShape';

const User = ({ name }) => (
  <div className="user-name">
    <h2 className="user-name__heading">{name}</h2>
  </div>
);

User.propTypes = UserShape.isRequired;

export default User;
