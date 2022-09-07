import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;

  const userExist = user
    ? <UserInfo user={user} />
    : 'User does not exist';

  const doneOrNot = completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={doneOrNot}>
      <h2 className="TodoInfo__title">{title}</h2>

      {userExist}
    </article>
  );
};
