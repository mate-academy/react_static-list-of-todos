import React from 'react';
import { User } from '../../types/User';

type Prors = {
  user: User
};

export const UserInfo: React.FC<Prors> = ({ user }) => {
  const { name, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
