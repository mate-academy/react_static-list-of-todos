import classNames from 'classnames';
import React from 'react';

import { TodoInfoType } from '../../types/Todo';

import { UserInfo } from '../UserInfo';

export const TodoInfo: React.FC<TodoInfoType> = ({ todo }) => (
  <article
    className={classNames(
      'TodoInfo',
      {
        'TodoInfo--completed': todo.completed,
      },
    )}
    key={todo.id}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);
