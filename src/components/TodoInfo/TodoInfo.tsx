import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import { User } from '../../types/User';

type Props = {
  id: number,
  title: string;
  completed: boolean;
  user: User | null,
};

export const TodoInfo: React.FC<Props> = ({
  id,
  title,
  user,
  completed,
}) => (
  <article
    key={id}
    className={classNames(
      'TodoInfo',
      {
        'TodoInfo--completed': completed === true,
      },
    )}
  >
    <h2 className="TodoInfo__title">{title}</h2>

    {user && (
      <UserInfo name={user.name} email={user.email} />
    )}
  </article>
);
