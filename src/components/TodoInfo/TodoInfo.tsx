import React from 'react';

import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo:React.FC<Props> = ({ todo }) => {
  const audit = todo.completed ? 'TodoInfo--completed' : '';

  return (
    <>
      <article className={`TodoInfo ${audit}`}>
        <h2 className="TodoInfo__title">
          {todo.title}
        </h2>

        {todo.user && <UserInfo user={todo.user} />}
      </article>
    </>
  );
};
