import React from 'react';
import { Todo } from '../../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <p>
      {todo.title}
    </p>
    <span>
      {todo.completed
        ? 'Done'
        : 'Active'}
    </span>
    {todo.user
      ? <UserInfo user={todo.user} />
      : 'No user'}
  </>
);
