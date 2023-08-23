import { User } from '../../types/User';

interface UserProps {
  user: User | null
}
export const UserInfo: React.FC<UserProps> = ({ user }) => {
  if (user !== null) {
    return (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    );
  }

  return null;
};
