import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type TodoProps = {
  todo: Todo;
};

export const TodoInfo: React.FC<TodoProps> = ({ todo }) => (
  <article className={classNames(
    'TodoInfo',
    {
      'TodoInfo--completed': todo.completed,
    },
  )}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {todo.user && <UserInfo user={todo.user} />}
  </article>
);
