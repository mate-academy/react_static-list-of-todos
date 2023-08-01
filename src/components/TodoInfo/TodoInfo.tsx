import cn from 'classnames';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <article className={cn(
    'TodoInfo',
    {
      'TodoInfo--completed': todo.completed,
    },
  )}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {todo.userId && todo.user && (
      <UserInfo user={todo.user} />
    )}
  </article>
);
