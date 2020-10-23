import React from 'react';
import { UserShape } from '../../shapes/UserShape';

export const User = ({ name }) => (
  <>
    {name}
  </>
);

User.propTypes = UserShape;
