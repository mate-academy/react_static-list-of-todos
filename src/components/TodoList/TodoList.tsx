import React from 'react';
import './TodoList.scss';
import { PreparedTodo } from '../../types';
import { TodoInfo } from '../TodoInfo';

type Props = {
  preparedTodos: PreparedTodo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todo-list">
    {preparedTodos.map(todo => (
      <li key={todo.id} className="todo-list__item">
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
