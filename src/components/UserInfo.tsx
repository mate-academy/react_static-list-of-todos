import { User } from '../types/User';
import './User.scss';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return user && (
    <div className="user">
      <h3 className="user__name">{user.name}</h3>
      <div className="user__email">{user.email}</div>
    </div>
  );
};
