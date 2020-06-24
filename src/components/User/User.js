import React from 'react';
import './User.css';
import { UserTypes } from '../Shape/UserTypes';

export const User = ({ user }) => (
  <p className="person">
    {user.name}
  </p>
);

User.propTypes = UserTypes;
