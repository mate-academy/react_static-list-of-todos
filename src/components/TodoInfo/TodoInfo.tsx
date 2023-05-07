import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface TodoInfoProps {
  todo: Todo;
}

export const TodoInfo: React.FC<TodoInfoProps> = ({ todo }) => {
  const {
    completed,
    title,
    user,
  } = todo;

  return (
    <article className={(completed
      ? 'TodoInfo TodoInfo--completed'
      : 'TodoInfo')}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
