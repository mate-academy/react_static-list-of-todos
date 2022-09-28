import { User } from '../../types/User';

type UserInfoProps = {
  user: User,
};

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <>
    <a className="UserInfo" href={user.email}>
      {user.name}
    </a>
  </>
);
