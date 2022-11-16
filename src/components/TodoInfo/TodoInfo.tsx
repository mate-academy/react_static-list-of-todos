import cn from 'classnames';
import { UserInfo } from '../UserInfo';
import { User } from '../../types/User';

interface Props {
  title: string,
  completed: boolean,
  user: User | null,
}

export const TodoInfo: React.FC<Props> = ({
  title,
  user,
  completed,
}) => (
  <article className={cn(
    'TodoInfo',
    {
      'TodoInfo--completed': completed,
    },
  )}
  >

    <h2 className="TodoInfo__title">
      {title}
    </h2>
    {user && (
      <UserInfo
        name={user.name}
      />
    )}
  </article>
);
