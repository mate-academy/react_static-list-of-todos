import React from 'react';
import { Todo } from '../Todo/Todo';
import './TodoList.scss';

export const TodoList = (props) => (
  <ul>
    {props.listTodo.map(todo => (
      <li key={todo.id} className="todo--block">
        <Todo {...todo}/>
      </li>
    ))}
  </ul>
);
