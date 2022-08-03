import React from 'react';
import className from 'classnames';

import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo:Todo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <article
    className={className(
      'TodoInfo',
      {
        'TodoInfo--completed': todo.completed,
      },
    )}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user && (
      <UserInfo user={todo.user} />
    )}
  </article>
);
