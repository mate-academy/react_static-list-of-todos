import React from 'react';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  task: Todo;
};

export const TodoInfo: React.FC<Props> = ({ task }) => {
  const {
    completed,
    user,
    title,
  } = task;

  return (
    <>
      <article
        className={`TodoInfo ${completed === true
          ? 'TodoInfo--completed'
          : ''}`}
      >
        <h2 className="TodoInfo__title">{title}</h2>
        {user ? <UserInfo user={user} /> : ''}
      </article>
    </>
  );
};
