import React from 'react';

import User from '../types/User';

import './User.scss';

type Props = {
  user: User | null,
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="list__user">
    <div className="list__name">
      {user?.name}
    </div>
    <div className="list__email">
      {user?.email}
    </div>
  </div>
);

export default UserInfo;
