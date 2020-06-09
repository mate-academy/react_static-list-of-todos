import React from 'react';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todos }) => (
  todos.map(todo => (
    <Todo key={todo.id} {...todo} />
  ))
);
