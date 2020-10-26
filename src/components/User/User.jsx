import React from 'react';
import { UserShape } from '../../shapes/UserShapes';

export const User = ({ name }) => (
  <div>
    <p>{name}</p>
  </div>
);

User.propTypes = UserShape;
