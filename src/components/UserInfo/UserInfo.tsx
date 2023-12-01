import { User } from '../../types/User';

type Users = {
  user: User;
};

export const UserInfo : React.FC<Users> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
