import React from 'react';
import { UserType } from '../../types';
import './User.scss';

export const User = ({ user }) => (
  <h3 className="user__name">
    {user.name}
  </h3>
);

User.propTypes = UserType.isRequired;
