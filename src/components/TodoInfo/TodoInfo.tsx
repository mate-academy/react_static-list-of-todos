import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;
  
  return (
    <>
    {user && (
      <article className={
        completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'
      }
      >
        <h2 className="TodoInfo__title">{title}</h2>

        <UserInfo user={user} />
      </article>
    )}
  </>
  )
};
