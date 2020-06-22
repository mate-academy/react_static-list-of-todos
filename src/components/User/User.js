import React from 'react';
import { userShape } from '../shapes/UserShape';

export const User = props => (
  <p>{props.user.name}</p>
);

User.propTypes = {
  user: userShape.isRequired,
};
