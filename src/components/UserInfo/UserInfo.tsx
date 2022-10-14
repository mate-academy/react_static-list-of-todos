import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return !user
    ? <span className="UserInfo">User name was not founded!</span>
    : (
      <a
        className="UserInfo"
        href={email && `mailto:${email}`}
      >
        { name && name }
      </a>
    );
};
