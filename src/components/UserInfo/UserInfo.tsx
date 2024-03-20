import { User } from '../../types/User';

interface UseIProps {
  user: User;
}
export const UserInfo: React.FC<UseIProps> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
