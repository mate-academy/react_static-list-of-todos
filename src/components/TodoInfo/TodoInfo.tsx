import React from 'react';
import { Todo } from '../../interfaces/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h1 className="item__title" data-cy="title">{todo.title}</h1>
    <p className="item__status" data-cy="status">
      Status:
      {todo.completed
        ? ' completed'
        : ' not completed'}
    </p>

    {todo.user && (
      <UserInfo user={todo.user} />
    )}
  </>
);
