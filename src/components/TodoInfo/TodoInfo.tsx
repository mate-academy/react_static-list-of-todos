import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <span>
      {todo.user && <UserInfo user={todo.user} />}
      {todo.title}
    </span>
    <br />
    <span data-cy="status">
      {!todo.completed && 'not'}
      completed
    </span>
    <br />
  </>
);
