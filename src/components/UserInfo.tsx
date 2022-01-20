import './User.scss';

export const UserInfo: React.FC<User> = ({
  name,
  email,
}) => (
  <div className="user">
    <h3 className="user__name">{name}</h3>
    <div className="user__email">{email}</div>
  </div>
);
