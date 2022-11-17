import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    user,
    completed,
  } = todo;

  const todoClass = completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={todoClass}>
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {user ? <UserInfo user={user} /> : null}
    </article>
  );
};
