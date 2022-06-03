import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

import { Todos } from '../../react-app-env';

type Props = {
  todo: Todos;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <div data-cy="title">{todo.title}</div>
    <div
      data-cy="status"
      className={
        todo.completed
          ? 'colorGreen'
          : 'colorRed'
      }
    >
      {todo.completed
        ? 'completed'
        : 'not completed'}

    </div>
    <UserInfo user={todo.user} />
  </>
);
