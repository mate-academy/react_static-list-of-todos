import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todos }) => {
  const {
    completed,
    title,
    user,
  } = todos;

  return (
    <article className={classNames(
      'TodoInfo', { 'TodoInfo--completed': completed },
    )}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
