import './UserInfo.scss';
import { User } from '../../types/User';

type UserData = Omit<User, 'id'>;

type Props = {
  user: UserData,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <p className="user__name">{user.name}</p>
    <p className="user__email">{user.email}</p>
  </div>
);
