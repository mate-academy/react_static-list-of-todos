import { User } from '../types';
import './UserInfo.scss';

export interface Props {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { email, name } = user;

  return (
    <div className="userInfo">
      <span className="userInfo__name">{name}</span>
      <br />
      <span className="userInfo__email">
        email:
        {email}
      </span>
    </div>
  );
};
