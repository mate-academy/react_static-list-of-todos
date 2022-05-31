import React from 'react';
import { PreparedTodo } from '../../react-app-env';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoList.scss';

interface Props {
  todos: PreparedTodo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="task-list">
    {todos.map(todo => (
      <li className="task-item" key={todo.id}>
        {todo.user && (
          <UserInfo user={todo.user} />
        )}
        <TodoInfo info={todo} />
      </li>
    ))}
  </ul>
);
