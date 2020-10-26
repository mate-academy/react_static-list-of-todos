import React from 'react';
import { Todo } from '../Todo';
import { TodoListShape } from '../Shapes/TodoListShape';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <div className="TodoList">
    {todos.map(todo => (
      <Todo {...todo} key={todo.id} />
    ))}
  </div>
);

TodoList.propTypes = TodoListShape;
