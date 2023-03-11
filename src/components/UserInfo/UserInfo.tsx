import React from 'react';
import './UserInfo.scss';

import { User } from '../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (!user) {
    return <p>Incorrect user info!</p>;
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
