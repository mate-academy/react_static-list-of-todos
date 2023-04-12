import { FC } from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: FC<Props> = ({
  todo,
}) => (
  <article
    className={
      `TodoInfo
      ${todo.completed ? ' TodoInfo--completed' : ''}`
    }
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <UserInfo user={todo.user} />
  </article>
);
