import { FC } from 'react';
import { User } from '../../types/User';

export const UserInfo: FC<User> = ({ email, name }) => {
  const link = `mailto:${email}`;

  return (
    <a className="UserInfo" href={link}>
      {name}
    </a>
  );
};
