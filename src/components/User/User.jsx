import React from 'react';
import './User.scss';
import { TodoListType } from '../../types';

export const User = ({ user }) => (
  <span className="name">
    {user.name}
  </span>
);

User.propTypes = {TodoListType};
