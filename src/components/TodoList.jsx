import React from 'react';
import { ToDo } from './ToDo';

export function TodoList({ preparedTodos }) {
  return (
    preparedTodos.map(todo => (
      <div>
        <ToDo todo={todo} key={todo.id} />
      </div>
    ))
  );
}
