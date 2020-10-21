import React from 'react';
import { UserShape } from '../shapes/UserShape';

export const User = ({ name }) => (
  <p>
    {name}
  </p>
);

User.propTypes = UserShape;
