import { User } from '../../types/User';

interface UserProps {
  user: User;
}

export const UserInfo:React.FC<UserProps> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
