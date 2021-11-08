import React from 'react';
import { TodoInfo } from './TodoInfo';
import { PreparedTodo } from '../types/types';
import './TodoList.scss';

interface Props {
  preparedTodos: PreparedTodo[];
}

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="list">
    {preparedTodos.map(preparedTodo => (
      preparedTodo.user && (
        <li key={preparedTodo.id} className="list__item">
          <TodoInfo todo={preparedTodo} />
        </li>
      )
    ))}
  </ul>
);
