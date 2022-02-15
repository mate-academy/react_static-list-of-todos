import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoInfo.scss';

export const TodoInfo: React.FC<Todo> = ({ title, completed, user }) => {
  const nameOfClass = completed ? 'todo_completed--true' : 'todo_completed--false';
  const status = completed
    ? <span className={nameOfClass}>Complete</span>
    : <span className={nameOfClass}>In process...</span>;

  return (
    <div className="todo">
      <p className="todo__title">{title}</p>
      <span>{status}</span>
      {user && <UserInfo {...user} />}
    </div>
  );
};
