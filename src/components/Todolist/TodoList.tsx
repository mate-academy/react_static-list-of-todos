import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';
import { PreparedTodos } from './PreparedTodos';

type Props = {
  todos: PreparedTodos[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li className="TodoList__items" key={todo.id}>
        <TodoInfo todo={todo} />
        <UserInfo user={todo.user} />
      </li>
    ))}
  </ul>
);
