import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type TodoProp = {
  todo: Todo;
};

export const TodoInfo: React.FC<TodoProp> = ({ todo }) => {
  const { title, user, completed } = todo;

  return (
    <article className={`TodoInfo ${completed && 'TodoInfo--completed'}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
