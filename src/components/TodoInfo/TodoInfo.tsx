import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

export const TodoInfo: React.FC<Todo> = ({
  title,
  completed,
  user,
  id,
}) => (
  <article
    className={completed === false
      ? 'TodoInfo'
      : 'TodoInfo TodoInfo--completed'}
    key={id}
  >
    <h2 className="TodoInfo__title">{title}</h2>
    {user && UserInfo(user)}
  </article>
);
