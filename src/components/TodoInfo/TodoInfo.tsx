import React from 'react';
import { Todo } from '../../types';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <>
      <h2>{todo.title}</h2>
      <input type="checkbox" checked={todo.completed} />
      {todo.user && <UserInfo user={todo.user} />}
    </>
  );
};
