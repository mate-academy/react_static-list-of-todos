import { User } from '../../types/User';

interface Props {
  user: User
}

export const UserInfo: React.FC<Props> = ({ ...user }) => (
  <a
    className="UserInfo"
    href={`mailto:${user.user.email}`}
  >
    {user.user.name}
  </a>
);
