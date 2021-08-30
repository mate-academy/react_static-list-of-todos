import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface Props {
  todo: Todo
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { user, title, completed } = todo;

  return (
    <>
      {user
        ? <UserInfo user={user} />
        : null}
      <td>{title}</td>
      <td>{completed ? 'Done' : 'Undone'}</td>
    </>
  );
};
