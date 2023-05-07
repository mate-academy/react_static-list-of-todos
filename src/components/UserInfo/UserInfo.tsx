import { User } from '../../types/User';

interface UserProp {
  user: User
}

export const UserInfo: React.FC<UserProp> = () => (
  <a className="UserInfo" href="mailto:Sincere@april.biz">
    Leanne Graham
  </a>
);
