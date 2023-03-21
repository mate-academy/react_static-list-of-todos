import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

export const TodoInfo: React.FC<Todo> = ({
  title,
  user,
}) => (
  <article className="TodoInfo TodoInfo--completed">
    <h2 className="TodoInfo__title">
      {title}
    </h2>
    <p>
      <UserInfo {...user} />
    </p>
  </article>
);
