import React from 'react';
import { User } from '../../types/user';

import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h2 className="userinfo__name">
      {user?.name}
    </h2>
    <p className="userinfo__text">
      {user?.email}
    </p>
    <p className="userinfo__text">
      {user?.phone}
    </p>
  </>
);
