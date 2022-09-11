import { User } from '../../types/User';

export const UserInfo: React.FC<User> = ({ email, name, id }) => (
  <a className="UserInfo" href={email} key={id}>
    {name}
  </a>
);
