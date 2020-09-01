import React from 'react';
import { UserShape } from './Shape';

export const User = user => (
  <span style={{
    color: 'beige', fontWeight: 'bold',
  }}
  >
    {user.name}
  </span>
);

User.propTypes = UserShape.isRequired;
