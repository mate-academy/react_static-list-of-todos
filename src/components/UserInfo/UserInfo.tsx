import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return user && (
    <>
      <h3 className="user__name">{`by ${user.name}`}</h3>
      <span className="user__info">{user.email}</span>
    </>
  );
};
