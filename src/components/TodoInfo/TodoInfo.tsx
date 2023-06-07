import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../types/Todo';

interface Props {
  todo: Todo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const todoClass = classNames(
    'TodoInfo',
    { 'TodoInfo--completed': todo.completed },
  );

  return (
    <article className={todoClass}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      { todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
