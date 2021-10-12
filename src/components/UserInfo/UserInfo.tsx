import React from 'react';
import { Todo } from '../../types/Todo';
import './UserInfo.scss';

type Props = {
  todo: Todo;
};

export const UserInfo: React.FC<Props> = ({ todo }) => (
  todo.completed
    ? (
      <li className="list__item list__item--done">
        {`NAME: ${todo.user?.name}, EMAIL: ${todo.user?.email}, TASK: ${todo.title} DONE`}
      </li>
    )
    : (
      <li className="list__item">
        {`NAME: ${todo.user?.name}, EMAIL: ${todo.user?.email}, TASK: ${todo.title} IN PROCESS`}
      </li>
    )
);
