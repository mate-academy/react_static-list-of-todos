import React from 'react';
import { Todo } from '../../types';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo: React.FC<Todo> = ({ title, completed, user }) => (
  <div className="todo">
    <div className="todo__title">
      {title}
    </div>

    <div className="todo_progress">
      {
        completed
          ? '+'
          : '-'
      }
    </div>
    {user
      && <UserInfo name={user.name} email={user.email} />}
  </div>
);
