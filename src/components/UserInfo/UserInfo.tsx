import { User } from '../../types/User';
import './UserInfo.scss';

type ReceivedUser = {
  user: User;
};

export const UserInfo: React.FC<ReceivedUser> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
