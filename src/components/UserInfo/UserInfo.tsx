import { User } from '../../types/user';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="info">
    <h2>{`Name: ${user.name}`}</h2>
    <h2>{`Email: ${user.email}`}</h2>
  </div>
);
