import React from 'react';
import { Todo } from '../Todo';
import { TodoListShape } from '../shapes/TodoListShape';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <div className="todo__list">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </div>
);

TodoList.propTypes = TodoListShape;
