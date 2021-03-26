import React from 'react';
import { UserShape } from '../../shapes/UserShapes';

export const User = ({ name }) => (
  <>
    <p>{name}</p>
  </>
);

User.propTypes = UserShape;
