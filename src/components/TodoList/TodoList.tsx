import React from 'react';
import classNames from 'classnames';
import { TodoInfo, Todo } from '../TodoInfo/TodoInfo';
import { User, UserInfo } from '../UserInfo/UserInfo';

export type PreparedTodos = Todo & { user: User | undefined
};
type Props = {
  all: PreparedTodos[]
};

export const TodoList: React.FC<Props> = ({ all = [] }) => (
  <ul>
    {all.map(item => (
      <li key={item.id} className={classNames('item-todo', { 'todo-completed': item.completed })}>
        <TodoInfo {...item} />
        <UserInfo {...item.user} />
      </li>
    ))}
  </ul>
);
