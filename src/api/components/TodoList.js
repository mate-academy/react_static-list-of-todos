import React from 'react';
import Todo from './Todo';
import { TodoListShape } from '../shapes/TodoListShape';

export const TodoList = ({ preparedTodos }) => (
  preparedTodos.map(todo => (
    <Todo {...todo} key={todo.id} />
  ))
);

TodoList.propTypes = TodoListShape;
