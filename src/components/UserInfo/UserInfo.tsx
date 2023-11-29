import { User } from '../../types/User';

interface UserListProps{
  user: User;
}

export const UserInfo: React.FC<UserListProps> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
