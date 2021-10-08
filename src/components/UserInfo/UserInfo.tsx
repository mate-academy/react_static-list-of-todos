import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <span className="userInfo__name">
      {user.name}
    </span>
    <span className="userInfo__email">
      {user.email}
    </span>
  </>
);
