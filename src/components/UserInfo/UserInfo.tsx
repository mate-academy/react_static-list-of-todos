import { FC } from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: FC<Props> = ({ user }) => {
  const link = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={link}>
      {user.name}
    </a>
  );
};
