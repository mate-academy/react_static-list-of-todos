import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo:React.FC<Props> = ({ todo }) => {
  const {
    user,
    title,
    completed,
  } = todo;

  const isComplete = completed
    ? 'TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={`TodoInfo ${isComplete}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      {user
      && <UserInfo user={user} />}
    </article>
  );
};
