// Add the required types and props
import React from 'react';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({
  todo: {
    title,
    completed,
    user,
  },
}) => (
  <article className={completed ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}>
    <h2 className="TodoInfo__title">{title}</h2>
    <UserInfo
      user={user}
    />
  </article>
);
