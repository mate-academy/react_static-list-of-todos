import { User } from '../../types/User';

type Props = {
  user: User | null
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div>
    {user && <a className="Userinfo" href={`mailto:${user.email}`}>{user.name}</a>}
  </div>
);
