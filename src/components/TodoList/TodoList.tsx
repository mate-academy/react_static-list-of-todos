import React from 'react';
import { PreparedTodos } from '../../types/PreparedTodos';
import { UserInfo } from '../UserInfo';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

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
