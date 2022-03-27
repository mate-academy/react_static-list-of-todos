import React from 'react';
import './TodoList.scss';

import { PreparedTodo } from '../../types/PreparedTodo';
import { TodoInfo } from '../TodoInfo';

interface Props {
  todos: PreparedTodo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="container">
    <ul className="todo-list">
      {todos.map(todo => (
        <li
          className="todo-list__item"
          key={todo.id}
        >
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  </div>
);
