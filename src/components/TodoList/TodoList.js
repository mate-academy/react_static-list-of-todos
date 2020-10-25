import React from 'react';
import { Todo } from '../Todo';
import './TodoList.scss';
import { TodoListShape } from '../../shapes/TodoListShape';

export const TodoList = ({ todos }) => (
  <ul className="todoList">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </ul>
);

TodoList.propTypes = TodoListShape;
