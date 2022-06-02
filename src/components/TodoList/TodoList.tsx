import React from 'react';
import { PreparedTodo } from '../../types';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

interface Props {
  preparedTodos: PreparedTodo[],
}

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todo-list">
    {preparedTodos.map(todo => (
      <li key={todo.id} className="todo-list__item">
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
