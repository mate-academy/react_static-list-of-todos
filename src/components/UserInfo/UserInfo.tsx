import { User } from '../../types/User';

export const UserInfo: React.FC<{ user: User | null }> = ({ user }) => {
  return (
    <a className="UserInfo" href={user?.email}>
      {user?.name}
    </a>
  );
};
