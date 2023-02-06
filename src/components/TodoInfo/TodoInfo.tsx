import React from 'react';
import classeNames from 'classnames';
import { Todo } from '../../types/Todo';
import { User } from '../../types/User';
import { UserInfo } from '../UserInfo';

interface Props extends Todo {
  user: User | null
}

export const TodoInfo: React.FC<Props> = (
  {
    title,
    user,
    completed,
  },
) => {
  const articleClass = classeNames('TodoInfo', {
    'TodoInfo--completed': completed,
  });

  return (
    <article className={articleClass}>
      <h2 className="TodoInfo__title">{title}</h2>
      {user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};
