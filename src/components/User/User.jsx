import React from 'react';
import './user.scss';
import { UserType } from '../../types';

export const User = ({ user }) => (
  <p className="user">
    User:
    { user.name }
  </p>
);

User.propTypes = UserType.isRequired;
