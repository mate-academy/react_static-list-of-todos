import React from 'react';
import { PreparedTodos } from '../../types/PreparedTodos';

type Props = {
  todo: PreparedTodos,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <div className="TodoInfo">
      <input
        type="checkbox"
        id={`todo-${todo.id}`}
        defaultChecked={todo.completed}
      />

      <label htmlFor={`todo-${todo.id}`}>
        {todo.title.toUpperCase()}
      </label>
    </div>
  );
};
