// Add the required types and props
import { User } from './../../types/User';

type PropsUser = {
  user: User;
};

export const UserInfo: React.FC<PropsUser> = ({ user }) => {
  return (
    <a className="UserInfo" href={user.email}>
      {user.name}
    </a>
  );
};
