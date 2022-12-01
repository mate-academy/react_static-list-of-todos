// Add the required types and props
import { User } from '../../types/User';

type UserData = {
  user: User
};

export const UserInfo: React.FC<UserData> = ({ user = {} }) => {
  // const { name, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
