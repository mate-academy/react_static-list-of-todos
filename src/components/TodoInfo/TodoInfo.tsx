import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

// Add the required types and props
type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <article className={classNames(
    'TodoInfo',
    { 'TodoInfo--completed': todo.completed === true },
  )}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} />
  </article>
);
