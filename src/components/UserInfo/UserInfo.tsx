import { User } from '../../types/User';

interface UserInfoProps {
  user: User | null
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <>
      {user ? (
        <a className="UserInfo" href={`mailto:${user.email}`}>
          {user.name}
        </a>
      ) : null}
    </>
  );
};
