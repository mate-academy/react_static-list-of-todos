import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User | null
};

export const UserInfo: React.FC <Props> = ({ user }) => {
  if (!user) {
    return <span>Anonymous User</span>;
  }

  const {
    name,
    email,
  } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
