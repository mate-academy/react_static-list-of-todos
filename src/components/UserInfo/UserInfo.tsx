import { User } from '../../types/User';

type UserInfoProps = {
  user: User;
};

export const UserInfo = ({ user }: UserInfoProps) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
