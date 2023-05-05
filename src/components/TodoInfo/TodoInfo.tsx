import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <article className={(todo.completed
      ? 'TodoInfo TodoInfo--completed'
      : 'TodoInfo'
    )}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={(!todo.user) ? null : todo.user} />
    </article>
  </>
);
