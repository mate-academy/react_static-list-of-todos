import React from 'react';
import { UserShape } from '../Shapes/UserShape';

export const User = ({ name }) => (
  <div className="User">
    {`Name: ${name}`}
  </div>
);

User.propTypes = UserShape;
