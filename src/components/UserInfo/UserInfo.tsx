import { User } from '../../types/User';
import './Userinfo.scss';

type Prop = {
  user: User;
};

export const UserInfo: React.FC<Prop> = ({ user }) => {
  const { name, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
