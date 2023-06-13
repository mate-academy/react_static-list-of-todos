import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

import { Todo } from '../../types/Todo';

import usersFromServer from '../../api/users';

type Props = {
  todo: Omit<Todo, 'user'>;
};

export const TodoInfo: React.FC<Props> = ({
  todo: { title, completed, userId },
}) => {
  const user = usersFromServer.find(usr => usr.id === userId);

  return (
    <article
      className={classNames(
        'TodoInfo',
        { 'TodoInfo--completed': completed },
      )}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {userId && user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};
