import React from 'react';
import { UserInfo } from './UserInfo';
import { Todo } from '../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { user, title, completed } = todo;

  return (
    <>
      {user && <UserInfo user={user} />}
      <div>{title}</div>
      <div>{completed && ('Done')}</div>
    </>
  );
};
