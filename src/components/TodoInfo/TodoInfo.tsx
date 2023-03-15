import { User } from '../../types/User';
import { UserInfo } from '../UserInfo';

type Props = {
  title: string;
  user: User | null;
};

export const TodoInfo: React.FC<Props> = ({ title, user }) => (
  <>
    <h2 className="TodoInfo__title">{title}</h2>

    {user ? (
      <UserInfo
        name={user.name}
        email={user.email}
      />
    ) : (
      null
    )}
  </>
);
