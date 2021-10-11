import React from 'react';
import classNames from 'classnames';
import { Todo } from '../types/Todo';
import { UserInfo } from './UserInfo';
import { TodoInfo } from './TodoInfo';

export const TodoCard: React.FC<{ todoCard: Todo }> = ({ todoCard }) => (
  <li className={classNames(
    'todo-list__item',
    {
      'todo-list__item--done': todoCard.completed,
    },
  )}
  >
    {todoCard.user && (
      <UserInfo currentUser={todoCard.user} />
    )}
    <TodoInfo todoInfo={todoCard} />
  </li>
);
