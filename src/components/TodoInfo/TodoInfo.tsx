import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type TodoItem = {
  todo: Todo;
};

export const TodoInfo: React.FC<TodoItem> = ({ todo }) => (
  <>
    <article className={classNames(
      'TodoInfo',
      {
        'TodoInfo--completed': todo.completed,
      },
    )}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
    </article>

    {todo.user !== null ? <UserInfo user={todo.user} /> : '' }
  </>
);
