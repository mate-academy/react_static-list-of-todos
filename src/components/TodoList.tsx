import React from 'react';
import { TodoInfo } from './TodoInfo';
import { PreparedTodo } from '../types/types';
import './TodoList.scss';

interface Props {
  todos: PreparedTodo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="list">
    {todos.map(preparedTodo => (
      preparedTodo.user && (
        <li key={preparedTodo.id} className="list__item">
          <TodoInfo todo={preparedTodo} />
        </li>
      )
    ))}
  </ul>
);
