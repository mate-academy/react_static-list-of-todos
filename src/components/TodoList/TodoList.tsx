import React from 'react';

import { PreparedTodo } from '../../react-app-env';
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';
import './TodoList.scss';

interface Props {
  fullTodos: PreparedTodo[];
}

export const TodoList: React.FC<Props> = ({ fullTodos }) => (
  <ul>
    {fullTodos.map(todo => (
      <div key={todo.id} className="conteiner">

        <li className="todo">

          {todo.user && (
            <UserInfo user={todo.user} />
          )}

          <TodoInfo todo={todo} />

        </li>
      </div>
    ))}
  </ul>
);
