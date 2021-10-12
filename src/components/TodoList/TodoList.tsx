import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="list">
    {todos.map(todo => (
      todo.completed
      ? (
        <li className="list__item list__item--done">
          <UserInfo todo={todo} key={todo.id} />
          <TodoInfo todo={todo} key={todo.id} />
        </li>
      )
      : (
        <li className="list__item">
          <UserInfo todo={todo} key={todo.id} />
          <TodoInfo todo={todo} key={todo.id} />
        </li>
      )))}
  </ul>
);
