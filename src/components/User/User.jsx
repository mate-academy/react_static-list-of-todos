import React from 'react';
import { TodoTypes } from '../../types';
import './User.scss';

export const User = ({ user }) => (
  <h3 className="user__name">
    {user.user.name}
  </h3>
);

User.propTypes = TodoTypes.isRequired;
