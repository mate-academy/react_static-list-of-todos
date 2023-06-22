import { User } from '../../types/User';
import { UserInfo } from '../UserInfo';

// Add the required types and props
type Props = {
  title: string,
  user: User | null,
  completed: boolean,
};

export const TodoInfo: React.FC<Props> = ({ title, user, completed }) => (
  <article className={`TodoInfo TodoInfo${completed && '--completed'}`}>
    <h2 className="TodoInfo__title">{title}</h2>

    {user && <UserInfo user={user} />}
  </article>
);
