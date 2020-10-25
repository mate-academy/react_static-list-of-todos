import React from 'react';
import { TodoListShape } from '../shapes/TodoListShape';
import { Todo } from '../Todo';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <ul className="todo__list list-group">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </ul>
);

TodoList.propTypes = TodoListShape;
