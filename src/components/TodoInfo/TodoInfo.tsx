import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo
};

export const TodoInfo:React.FC<Props> = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;

  const isCompleted = completed ? 'TodoInfo--completed' : '';

  return (
    <article className={`TodoInfo ${isCompleted}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
