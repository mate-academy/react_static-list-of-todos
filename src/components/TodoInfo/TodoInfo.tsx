// Add the required types and props
import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../types/Todo';

type TodoType = {
  todo: Todo;
};

export const TodoInfo: React.FC<TodoType> = ({ todo }) => {
  const { title, user, completed } = todo;

  return (
    <article className={classNames(
      'TodoInfo',
      {
        'TodoInfo--completed': completed === true,
      },
    )}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
