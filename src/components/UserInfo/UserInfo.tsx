import { User } from '../../types/User';

type Prop = {
  user: User;
};

export const UserInfo: React.FC<Prop> = ({ user }) => {
  return (
    <a className="UserInfo" href={user.email}>
      {user.name}
    </a>
  );
};
