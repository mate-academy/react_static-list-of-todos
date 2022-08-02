import { User } from '../../types/User';

type ReceivedUser = {
  user: User | null;
};

export const UserInfo: React.FC<ReceivedUser> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user ? user.email : null}`}>
    {user ? user.name : null}
  </a>
);
