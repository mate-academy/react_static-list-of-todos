import React from 'react';
import { User } from '../../types/User';

type Prop = {
  user: User | null;
};

export const UserInfo: React.FC<Prop> = ({ user }) => {
  return (
    <a className="UserInfo" href={`mailto:${user?.email}`}>
      {user?.name}
    </a>
  );
};
