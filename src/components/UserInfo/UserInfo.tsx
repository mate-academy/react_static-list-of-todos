import { User } from '../../types/User';

interface UserProp {
  user: User
}

export const UserInfo: React.FC<UserProp> = ({
  user: {
    name, email,
  },
}) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>
);
