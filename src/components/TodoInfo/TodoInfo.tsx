import cn from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface TodoInfoProps {
  todoInfo: Todo
}

export const TodoInfo: React.FC<TodoInfoProps> = ({
  todoInfo: {
    title, user, completed,
  },
}) => {
  const className = cn({
    TodoInfo: true,
    'TodoInfo--completed': completed,
  });

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user ? <UserInfo user={user} /> : undefined}
    </article>
  );
};
