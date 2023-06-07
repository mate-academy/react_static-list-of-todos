import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type PropsTodo = {
  todo: Todo;
};

export const TodoInfo: React.FC<PropsTodo> = ({ todo }) => {
  const {
    title,
    user,
    completed,
  } = todo;

  return (
    <article className={
      completed
        ? 'TodoInfo TodoInfo--completed'
        : 'TodoInfo'
    }
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};
