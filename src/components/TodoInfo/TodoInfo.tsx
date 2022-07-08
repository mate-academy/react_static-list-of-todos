import React from 'react';
import { Todo } from '../../Type/Todos';

export const TodoInfo: React.FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <div>
      <p data-cy="title">{todo.title}</p>
      <p data-cy="status">{todo.completed}</p>
    </div>
  );
};
