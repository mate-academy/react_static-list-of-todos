import React from 'react';
import { UserShape } from '../Shape';

export const User = props => (
  <p>{props.name}</p>
);

User.propTypes = UserShape.isRequired;
