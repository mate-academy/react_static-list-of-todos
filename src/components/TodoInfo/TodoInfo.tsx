import cn from 'classnames';

import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

// Add the required types and props
type Props = {
  todo: Todo;
};

export const TodoInfo = ({ todo }: Props) => {
  const className = cn({
    TodoInfo: true,
    'TodoInfo--completed': todo.completed,
  });

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {!!todo.user && (
        <UserInfo user={todo.user} />
      )}
    </article>
  );
};
