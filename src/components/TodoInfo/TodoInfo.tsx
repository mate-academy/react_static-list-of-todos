import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

export const TodoInfo: React.FC<Todo> = ({ completed, title, user }) => (
  <article
    className={classNames('TodoInfo', {
      'TodoInfo--completed': completed,
    })}
  >
    <h2 className="TodoInfo__title">{title}</h2>

    {user && <UserInfo {...user} />}
  </article>
);
