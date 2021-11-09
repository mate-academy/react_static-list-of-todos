import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  userInfo: User;
};

export const UserInfo: React.FC<Props> = ({ userInfo }) => (
  <div>
    <div>
      <span className="User">User: </span>
      <span className="User__name">{userInfo.name}</span>
    </div>
    <div>
      <span>User email: </span>
      <a href={`mailto: ${userInfo.email}`} className="User__email">
        {userInfo.email}
      </a>
    </div>
  </div>
);
