// Add the required types and props
import { User } from '../../types/User';

export const UserInfo = ({ user }: { user: User }) => (
  <a
    key={user.id}
    className="UserInfo"
    href={`mailto:${user.email}`}
  >
    {user.name}
  </a>
);
