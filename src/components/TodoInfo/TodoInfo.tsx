import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type TodoProps = {
  todo: Todo
};

export const TodoInfo: React.FC<TodoProps> = ({
  todo,
}) => {
  const {
    completed, title, user, userId,
  } = todo;

  return (
    <article
      className={classNames(
        'TodoInfo',
        {
          'TodoInfo--completed': completed,
        },
      )}
    >

      <h2 className="TodoInfo__title">
        {`${title}`}
      </h2>

      {
        user && (
          <UserInfo key={userId} user={user} />
        )
      }

    </article>
  );
};
