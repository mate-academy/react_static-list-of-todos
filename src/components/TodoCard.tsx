import React from 'react';
import classNames from 'classnames';
import { Todo } from '../types/Todo';
import { UserInfo } from './UserInfo';
import { TodoInfo } from './TodoInfo';

type Props = {
  todoCard: Todo
};

export const TodoCard: React.FC<Props> = ({ todoCard }) => (
  <li className={classNames(
    'todo-list__item',
    {
      'todo-list__item--done': todoCard.completed,
    },
  )}
  >
    {todoCard.user && (
      <UserInfo userInfo={todoCard.user} />
    )}
    <TodoInfo todoInfo={todoCard} />
  </li>
);
