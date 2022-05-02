import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoInfo.scss';

export const TodoInfo: React.FC<Todo> = ({ title, completed, user }) => {
  const status = completed
    ? <span className="statusDone">Done</span>
    : <span className="statusInProgress">In Progress</span>;

  return (
    <div className="todo">
      <p className="todo__title">{title}</p>
      <span>{status}</span>
      {user && <UserInfo {...user} />}
    </div>
  );
};
