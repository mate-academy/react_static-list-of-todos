import { User } from '../../types/User';
import { UserInfo } from '../UserInfo';

type Props = {
  title: string;
  completed: boolean;
  user: User | null;
};

export const TodoInfo: React.FC<Props> = ({
  title,
  completed,
  user,
}) => {
  const todoComleted = completed
    ? 'TodoInfo--completed'
    : '';

  return (
    <article
      className={`TodoInfo ${todoComleted}`}
    >
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {user && (
        <UserInfo
          name={user.name}
          email={user.email}
        />
      )}
    </article>
  );
};
