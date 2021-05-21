import React from 'react';
import { ToDo } from './ToDo';

export function TodoList({ todos }) {
  return (
    todos.map(todo => (
      <ToDo todo={todo} key={todo.id} />
    ))
  );
}
