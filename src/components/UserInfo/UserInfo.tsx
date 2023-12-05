import { User } from '../../types/User';

interface UserProp {
  user: User
}

export const UserInfo: React.FC<UserProp> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
