import { User } from '../../types/User';

type PropsUserInfo = {
  user: User;
};

export const UserInfo: React.FC<PropsUserInfo> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
