import React from 'react';
import { Todo } from '../Types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoCard: React.FC<{ todo: Todo; }> = ({ todo }) => (
  <div className="card">
    <span className="card__title">{todo.title}</span>
    <span className="card__person">
      <UserInfo user={todo.user} />
    </span>
  </div>
);
