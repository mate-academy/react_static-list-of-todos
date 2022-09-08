import React from 'react';
import { Todo } from '../../types/Todo';

import { UserInfo } from '../UserInfo/UserInfo';

type TodoType = {
  todo: Todo;
};

export const TodoInfo: React.FC<TodoType> = ({ todo }) => {
  const { title, user, completed } = todo;

  return (
    <article className={completed
      ? 'TodoInfo TodoInfo--completed'
      : 'TodoInfo'}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
