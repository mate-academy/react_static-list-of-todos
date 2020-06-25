import React from 'react';
import { UserShape } from '../../shapes';
import './User.css';

export const User = ({ user }) => (
  <span className="todo__user">
    {user.name}
  </span>
);

User.propTypes = {
  user: UserShape.isRequired,
};
