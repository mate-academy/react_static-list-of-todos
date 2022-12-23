// Add the required types and props
import React from 'react';
import classNames from 'classnames';

import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <article className={classNames(
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
