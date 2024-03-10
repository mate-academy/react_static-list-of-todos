// Add the required types and props
import { User } from '../../types/User';

interface UserInfoProps {
  user: User | null;
}

export const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <>
      {user && (
        <a className="UserInfo" href={`mailto:${user.email}`}>
          {user.name}
        </a>
      )}
    </>
  );
};
