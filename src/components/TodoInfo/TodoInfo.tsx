import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;

  return (
    <article className={
      completed
        ? 'TodoInfo TodoInfo--completed'
        : 'TodoInfo'
    }
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {user ? <UserInfo user={user} /> : null}
    </article>
  );
};
