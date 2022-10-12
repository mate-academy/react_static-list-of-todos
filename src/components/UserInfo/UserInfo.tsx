// Add the required types and props
import React from 'react';
import { User } from '../../react-app-env';

type Props = {
  user: User | null
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return user && (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
