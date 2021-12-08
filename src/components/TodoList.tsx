import React from 'react';
import './TodoList.scss';

import { Todo } from '../types/Todo';
import { UserInfo } from './UserInfo';
import { TodoInfo } from './TodoInfo';

type Props = {
  todoArr: Todo[];
};

export const TodoList: React.FC<Props> = ({ todoArr = [] }) => (
  <ul>
    {todoArr.map(({
      id,
      user,
      title,
      completed,
    }) => user && (
      <li key={id} className="todoCard">
        <UserInfo
          name={user.name}
          email={user.email}
        />
        <TodoInfo
          title={title}
          completed={completed}
        />
      </li>
    ))}
  </ul>
);
