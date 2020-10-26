import React from 'react';
import './TodoList.scss';
import { TodoListShape } from '../../shapes/TodoListShape';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todoList }) => (
  <ul>
    {
      todoList.map(todo => (
        <li
          className={`todo-item ${todo.completed
            ? 'completed'
            : 'not_completed'}`}
          key={todo.id}
        >
          <Todo {...todo} />
        </li>
      ))
    }
  </ul>
);

TodoList.propTypes = TodoListShape;
