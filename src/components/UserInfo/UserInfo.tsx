import './UserInfo.scss';
import { User } from '../../types/User';

type Props = {
  user: User | null
};

export const UserInfo:React.FC<Props> = ({ user }) => {
  if (user) {
    const { email, name } = user;

    return (
      <a className="UserInfo" href={email}>
        {name}
      </a>
    );
  }

  return (
    <a className="UserInfo" href="Email is not defined">
      User is not defined
    </a>
  );
};
