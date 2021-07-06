import React from 'react';
import { UserShape } from '../../shapes/UserShape';

export const User = ({ name }) => (
  <div className="mb-1">
    <b>{name}</b>
  </div>
);

User.propTypes = UserShape;
