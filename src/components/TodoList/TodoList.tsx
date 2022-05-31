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

          <UserInfo
            name={todo.user ? todo.user.name : 'Unknown'}
            email={todo.user ? todo.user.email : 'not email'}
          />

          <TodoInfo
            title={todo.title}
            completed={todo.completed}
          />
        </li>
      </div>
    ))}
  </ul>
);
