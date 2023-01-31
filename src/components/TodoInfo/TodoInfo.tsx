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
    <>
      <article
        className={classNames(
          'TodoInfo',
          {
            'TodoInfo--completed': completed === true,
          },
        )}
      >
        {user
          && (
            <UserInfo title={title} user={user} />
          )}
      </article>
    </>
  );
};
