import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type TypeTodoInfo = {
  todo: Todo;
};

export const TodoInfo: React.FC<TypeTodoInfo> = ({ todo }) => {
  const {
    title,
    user,
    userId,
    completed,
  } = todo;

  const classComplete = completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={classComplete}>
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} key={userId} />}
    </article>
  );
};
