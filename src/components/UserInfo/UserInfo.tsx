import { User } from '../../types/User';

type UserInfoProps = {
  user: User,
};

export const UserInfo : React.FC<UserInfoProps> = ({ user }) => {
  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
