// Add the required types and props
import React from 'react';
import { Todo } from '../../types/Todo';

import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;
  const classInf = completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <article className={classInf}>
      <h2 className="TodoInfo__title">{title}</h2>
      {user && (<UserInfo user={user} />)}
    </article>
  );
};
