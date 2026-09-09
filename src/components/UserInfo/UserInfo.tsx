// Add the required types and props
import { User } from '../../types/User';

interface UserElement {
  user: User;
}

export const UserInfo = ({ user }: UserElement) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
