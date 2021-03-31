import React from 'react';

import { UserShapes } from '../../shapes/UserShapes';

export const User = ({ name }) => (
  <h2>{name}</h2>
);

User.propTypes = UserShapes;
