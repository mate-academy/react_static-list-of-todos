import React from 'react';

import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo:React.FC<Props> = ({ todo }) => {
  const {
    completed,
    title,
    user,
  } = todo;
  const audit = completed ? 'TodoInfo--completed' : '';

  return (
    <>
      <article className={`TodoInfo ${audit}`}>
        <h2 className="TodoInfo__title">
          {title}
        </h2>

        {user && <UserInfo user={user} />}
      </article>
    </>
  );
};
