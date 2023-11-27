import { User } from '../../types/User';

interface Prop {
  user: User;
}

export const UserInfo: React.FC<Prop> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
