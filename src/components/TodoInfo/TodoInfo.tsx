import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    user,
    title,
    completed,
  } = todo;

  return (
    <article className={completed ? 'TodoInfo TodoInfo--completed'
      : 'TodoInfo'}
    >
      <h2 className="TodoInfo__title">
        {title}
      </h2>
      {user ? <UserInfo user={user} /> : null}
    </article>
  );
};
