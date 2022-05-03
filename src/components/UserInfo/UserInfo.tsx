import { User } from '../types/User';

export const UserInfo: React.FC<User> = ({
  name, email,
}) => (
  <div className="user">
    <h3 className="user__name">{name}</h3>
    <p className="user__email">{email}</p>
  </div>
);
