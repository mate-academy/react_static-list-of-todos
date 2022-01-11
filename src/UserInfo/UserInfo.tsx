import React from 'react';
import { User } from '../types/user';

import './UserInfo.scss';

type Props = {
  user: User | null,
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <div className="user__name">
      {user ? `Name - ${user.name}` : null}
    </div>
    <div className="user__email">
      {user ? `Email - ${user.email}` : null}
    </div>
  </div>
);

export default UserInfo;
