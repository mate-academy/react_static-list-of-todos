import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <span className="userInfo">
    {`${user.name} (${user.email})`}
  </span>
);
