import { FC } from 'react';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

interface Props {
  todo: Todo;
}

export const TodoInfo:FC<Props> = ({ todo }) => {
  const className = `TodoInfo ${
    todo.completed
      ? 'TodoInfo--completed'
      : ''}`;

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user
        ? <UserInfo user={todo.user} />
        : ''}
    </article>
  );
};
