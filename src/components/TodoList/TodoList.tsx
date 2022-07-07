import React from 'react';

import { Todos } from '../../types/Todos';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todos: Todos[]
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="list">
    {todos.map(todo => (
      <li className="card" key={todo.id}>
        <TodoInfo title={todo.title} completed={todo.completed} />
        <UserInfo user={todo.user} />
      </li>
    ))}
  </ul>
);
