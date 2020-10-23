import React from 'react';
import { UserShape } from '../shapes/UserShape';

const User = ({ name }) => (
  <span>
    {name}
  </span>
);

User.propTypes = UserShape;
export default User;
