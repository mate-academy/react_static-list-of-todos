import { User } from '../../types/User';

type TypeUser = {
  user: User;
};

export const UserInfo: React.FC<TypeUser> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
