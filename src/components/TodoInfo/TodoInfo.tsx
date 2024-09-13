import React from 'react';
import { Todo } from '../../types/Todo';
import cn from 'classnames';
import { UserInfo } from '../UserInfo';

export const TodoInfo: React.FC<{ todo: Todo }> = ({ todo }) => {
  const className = cn({
    TodoInfo: true,
    'TodoInfo--completed': todo.completed,
  });

  return (
    <article key={todo.id} className={className}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
