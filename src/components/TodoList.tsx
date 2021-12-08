import React from 'react';
import { TodoInfo } from './TodoInfo';
import { Todo } from '../types/Todo';

import './TodoList.scss';

interface Props {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li className="TodoList__item" key={todo.id}>
        <TodoInfo title={todo.title} completed={todo.completed} user={todo.user} />
      </li>
    ))}
  </ul>
);
