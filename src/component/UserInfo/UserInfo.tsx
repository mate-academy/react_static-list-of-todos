import { User } from '../../types/Types';
import './UserInfo.scss';

type PropsUser = {
  user: User
};

export const UserInfo: React.FC<PropsUser> = ({ user }) => (
  <div className="user">
    <div className="user__name">{user.name}</div>
    <div className="user__email">{user.email}</div>
  </div>
);
