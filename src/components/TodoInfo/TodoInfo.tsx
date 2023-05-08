import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo: todos }) => (
  <article className={classNames(
    'TodoInfo',
    {
      'TodoInfo--completed': todos.completed,
    },
  )}
  >
    <h2 className="TodoInfo__title">{todos.title}</h2>
    {todos.user && (
      <UserInfo user={todos.user} />
    )}
  </article>
);
