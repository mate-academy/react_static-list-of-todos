import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';
import { User } from '../../types/User';

type Props = {
  todo: Todo
};

export const TodoInfo = ({ todo }: Props) => {
  const classNameTodoInfo = `TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`;

  return (
    <article className={classNameTodoInfo}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user as User} />
    </article>
  );
};
