import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p>{user.name}</p>
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.email}
    </a>
  </>
);
