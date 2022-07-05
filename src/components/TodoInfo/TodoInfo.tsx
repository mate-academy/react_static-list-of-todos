import React from 'react';
import { Todo } from '../../Type/Todos';

const TodoInfo: React.FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <div>
      <p>{todo.title}</p>
      <p>{todo.completed}</p>
    </div>
  );
};

export default TodoInfo;
