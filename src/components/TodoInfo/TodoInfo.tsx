import cx from 'classnames';
import { User } from '../../types/User';
import { UserInfo } from '../UserInfo';

type Props = {
  title: string,
  completed: boolean,
  user: User | null
};

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => {
  const className = cx({
    TodoInfo: true,
    'TodoInfo--completed': completed,
  });

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {user
        && (
          <UserInfo
            key={user.id}
            name={user.name}
            email={user.email}
          />
        )}
    </article>
  );
};
