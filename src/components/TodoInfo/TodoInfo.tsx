import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;

  return (
    <article className={classNames(
      'TodoInfo',
      {
        'TodoInfo--completed': completed,
      },
    )}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      <article className={classNames(
        'TodoInfo',
        {
          'TodoInfo--completed': completed,
        },
      )}
      >
        {user && (
          <UserInfo user={user} />
        )}
        ;
      </article>
    </article>
  );
};
