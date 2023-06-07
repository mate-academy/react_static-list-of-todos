import React from 'react';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

interface Prop {
  todo: Todo;
}

export const TodoInfo: React.FC<Prop> = ({ todo }) => {
  const {
    completed,
    title,
    user,
  } = todo;

  return (
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>

      <h2 className="TodoInfo__title">
        { title }
      </h2>

      {user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};
