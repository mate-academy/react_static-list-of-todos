import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

// Add the required types and props
type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, user, completed } = todo;

  return (
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : null}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      {user !== null && <UserInfo user={user} />}
    </article>

  );
};
