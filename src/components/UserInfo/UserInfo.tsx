// Add the required types and props
import { User } from '../../types/User';

interface UserElement {
  user: User;
}

export const UserInfo = ({ user }: UserElement) => (
  <div className="UserInfo">
    <a href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </div>
);
