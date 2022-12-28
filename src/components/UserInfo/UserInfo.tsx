// Add the required types and props

import { User } from '../../types/User';

type Person = {
  user: User;
};

export const UserInfo: React.FC<Person> = ({ user }) => (
  <a
    className="UserInfo"
    href={`mailto:${user.email}`}
  >
    {`${user.name}`}
  </a>
);
