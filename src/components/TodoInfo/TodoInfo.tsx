import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({
  todo: {
    id,
    title,
    completed,
    user,
  },
}) => (
  <>
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      {user && (
        <UserInfo
          key={id}
          user={user}
        />
      )}
    </article>
  </>
);
