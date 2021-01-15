import React from 'react';
import { TypeOfUser } from '../../types';

export const User = ({ user }) => (
  <span style={{
    fontWeight: 'bold', color: 'darkgreen',
  }}
  >
    {user.name}
  </span>
);

User.propTypes = TypeOfUser;
