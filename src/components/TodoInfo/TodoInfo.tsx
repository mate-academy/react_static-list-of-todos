import classNames from 'classnames';

import { User } from '../../types/User';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
    user: User | null,
  };
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
