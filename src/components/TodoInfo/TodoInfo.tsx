import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

interface TodoInfoProps {
  todo : Todo
}

export const TodoInfo: React.FC<TodoInfoProps> = ({ todo }) => (
  <article className={classNames('TodoInfo', {
    'TodoInfo--completed': todo.completed,
  })}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <UserInfo user={todo.user} />
  </article>
);
