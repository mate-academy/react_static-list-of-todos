import { User } from '../../types/User';

export const UserInfo: React.FC<User> = ({ email, name }) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>
);
