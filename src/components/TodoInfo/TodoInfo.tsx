import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

// Add the required types and props

interface TodoInfoProps {
  todo: Todo;
}

export const TodoInfo: React.FC<TodoInfoProps> = ({
  todo: {
    title,
    completed,
    user,
  },
}) => {
  const todoClass = completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={todoClass}>
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};
