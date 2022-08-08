import classNames from 'classnames';

import { UserInfo } from '../UserInfo';
import { User } from '../../types/User';

// Add the required types and props
type Props = {
  title: string,
  completed: boolean,
  user: User | null,
};

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => (
  <>
    <article className={classNames(
      'TodoInfo',
      {
        'TodoInfo--completed': completed,
      },
    )}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  </>
);
