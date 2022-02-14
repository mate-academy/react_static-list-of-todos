import { User } from '../../../types/User';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <p className="userInfo__name">
      <strong>{'Name: '}</strong>
      {user.name}
    </p>
    <p className="userInfo__email">
      <strong>{'Email: '.toUpperCase()}</strong>
      {user.email}
    </p>
  </div>
);
