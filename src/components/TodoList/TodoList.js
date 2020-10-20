import React from 'react';
import { Todo } from '../Todo';
import { TodoListShape } from '../shapes/TodoListShape';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <div className="TodoList">
    {todos.map(todo => (
      <div className="TodoList__todo" key={todo.id}>
        <Todo {...todo} />
      </div>
    ))}
  </div>
);

TodoList.propTypes = TodoListShape;
