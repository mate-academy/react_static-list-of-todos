// Add the required types and props
import React from 'react';

import { UserInfo } from '../UserInfo';

import { Todo } from '../../types/Todo';

export const TodoInfo: React.FC<Todo> = ({
  completed,
  title,
  user,
}) => {
  const TodoInfoClass = completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={TodoInfoClass}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user
        && (
          <UserInfo
            name={user.name}
            email={user.email}
            id={user.id}
          />
        )}
    </article>
  );
};
