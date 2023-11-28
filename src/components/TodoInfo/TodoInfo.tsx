import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    userId,
    user,
    completed,
  } = todo;

  return (
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : null}`}>
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {user && <UserInfo key={userId} user={user} />}
    </article>

  );
};
