import { UserInfo } from '../UserInfo';

import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo
};

export const TodoInfo = ({ todo }: Props) => (
  <article className={
    todo.completed
      ? 'TodoInfo TodoInfo--completed'
      : 'TodoInfo'
  }
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);
