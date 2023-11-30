import { User } from '../../types/User';
// Add the required types and props

interface Userinfo {
  user: User
}

export const UserInfo = ({ user }: Userinfo) => {
  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
