import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

type ReceivedTodo = {
  todo: Todo;
};

export const TodoInfo: React.FC<ReceivedTodo> = ({ todo }) => (
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
