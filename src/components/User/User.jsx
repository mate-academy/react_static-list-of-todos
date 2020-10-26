import React from 'react';
import { UserShape } from '../../shapes/UserShape';

export const User = ({ user }) => (
  <>
    {user.name}
  </>
);

User.propTypes = UserShape;
