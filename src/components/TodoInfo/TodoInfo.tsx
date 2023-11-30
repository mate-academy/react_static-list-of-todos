// Add the required types and props
import cn from 'classnames';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title, user, id, completed,
  } = todo;

  return (
    <article className={cn('TodoInfo',
      {
        'TodoInfo--completed': completed,
      })}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user ? <UserInfo key={id} user={user} /> : null}
    </article>
  );
};
