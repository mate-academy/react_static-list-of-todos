import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a key={user.id} className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
