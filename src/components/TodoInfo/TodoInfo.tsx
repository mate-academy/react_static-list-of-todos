import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <article className={classNames(
    'TodoInfo',
    {
      'TodoInfo--completed': todo.completed,
    },
  )}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo todoUser={todo.user} />
  </article>
);
