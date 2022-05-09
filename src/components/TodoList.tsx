import React from 'react';
import { UserInfo } from './UserInfo';
import { TodoInfo } from './TodoInfo';
import { Todo } from '../types/TodoTypes';

type Props = {
  listTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ listTodos = [] }) => (
  <ul>
    {listTodos.map(list => (
      <li key={list.id}>
        {list.user ? (<UserInfo user={list.user} />) : ('no user')}
        <TodoInfo {...list} />
      </li>
    ))}
  </ul>
);
