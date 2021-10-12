import React from 'react';
import { Todo } from '../Types/Todo';

export const TodoCard: React.FC<{ todo: Todo; }> = ({ todo }) => (
  <div className="card">
    <span className="card__title">{todo.title}</span>
    <span className="card__person">
      {todo.user?.name}
      {' --- '}
      {todo.user?.phone}
    </span>
  </div>
);
