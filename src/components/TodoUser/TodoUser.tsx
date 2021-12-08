import React from 'react';
import { User } from '../../interfaces/User';
import './TodoUser.scss';

export const TodoUser: React.FC<User> = ({ name, email }) => (
  <div className="todo__user">
    <div className="todo__name">{name}</div>
    <a className="todo__email" href="mailto:{email}">{email}</a>
  </div>
);
