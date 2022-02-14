import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoInfo.scss';

export const TodoInfo: React.FC<Todo> = ({ title, completed, user }) => {
  const status = completed
    ? <strong className="todo_completed--true">Complete</strong>
    : <strong className="todo_completed--false">In process...</strong>;

  return (
    <div className="todo">
      <p className="todo__title">{title}</p>
      <span>{status}</span>
      {user && <UserInfo {...user} />}
    </div>
  );
};
