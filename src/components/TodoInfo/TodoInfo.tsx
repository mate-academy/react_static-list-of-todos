import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';
// Add the required types and props

type Props = {
  todoWithUser: Todo;
};

export const TodoInfo: React.FC<Props> = ({
  todoWithUser: {
    title,
    completed,
    user,
  },
}) => (
  <article className={classNames('TodoInfo',
    { 'TodoInfo--completed': completed })}
  >
    <h2 className="TodoInfo__title">{title}</h2>
    {user && <UserInfo user={user} />}
  </article>
);
