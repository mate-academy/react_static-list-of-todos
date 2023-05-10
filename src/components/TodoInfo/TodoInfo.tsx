import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface Props {
  todo: Todo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;

  const className = classNames(
    'TodoInfo',
    {
      'TodoInfo--completed': completed,
    },
  );

  return (
    <div className={className}>
      <article>
        <h2 className="TodoInfo__title">
          {title}
        </h2>

        {user && (
          <UserInfo user={user} />
        )}
      </article>
    </div>
  );
};
