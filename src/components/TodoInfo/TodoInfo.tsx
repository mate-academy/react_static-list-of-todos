import React from 'react';

import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface Prop {
  info: Todo;
}

export const TodoInfo: React.FC<Prop> = ({ info }) => {
  const { completed, title, user } = info;

  return (
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};
