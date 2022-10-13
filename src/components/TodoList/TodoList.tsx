import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type TodosItem = {
  todosItem: Todo[]
};

export const TodoList: React.FC<TodosItem> = ({ todosItem }) => (
  <ul>
    {todosItem.map(todo => (
      <li key={todo.id}>
        <UserInfo {...todo} />
      </li>
    ))}
  </ul>
);
