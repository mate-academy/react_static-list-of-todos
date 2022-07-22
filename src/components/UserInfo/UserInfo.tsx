// Add the required types and props
import { User } from '../../types/User';

type Prop = {
  user:User | null;
};

export const UserInfo: React.FC<Prop> = ({ user }) => (
  <a className="UserInfo" href={user?.email}>
    {user?.name}
  </a>
);
