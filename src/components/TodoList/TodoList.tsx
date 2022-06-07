import React from 'react';
import './TodoList.scss';
import { PreparedTodo } from '../../types';
import { TodoInfo } from '../TodoInfo';

type Props = {
  preparedTodos: PreparedTodo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todo-list">
    {(preparedTodos).map(todo => (
      <li key={todo.id} className="todo-list__item">
        <TodoInfo
          title={todo.title}
          completed={todo.completed}
          user={todo.user || null}
        />
      </li>
    ))}
  </ul>
);
