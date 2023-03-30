import React from 'react';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

// Add the required types and props
interface Props {
  todo: Todo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <article className={(todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo')}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {todo.user && <UserInfo user={todo.user} />}
  </article>
);
