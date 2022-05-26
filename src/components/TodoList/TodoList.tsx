import React from 'react';
import { FullTodo } from '../../react-app-env';
import TodoInfo from '../TodoInfo/TodoInfo';
import UserInfo from '../UserInfo/UserInfo';
import './TodoList.scss';

type Props = {
  todos: FullTodo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id} className="todo-info">
        {todo.user && (
          <UserInfo user={todo.user} />
        )}
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
