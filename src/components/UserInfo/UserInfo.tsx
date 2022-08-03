import React from 'react';
import { User } from '../../types/User';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  const mail = `mailto:${user.email}`;

  return (
    <a
      className="UserInfo"
      href={mail}
    >
      {user.name}
    </a>
  );
};
