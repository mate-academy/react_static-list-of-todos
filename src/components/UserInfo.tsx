import React from 'react';

import { User } from '../types/User';

import './User.scss';

type Props = {
  user: User,
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="list__user">
    <p className="list__name">
      {user.name}
    </p>
    <p className="list__email">
      {user.email}
    </p>
  </div>
);

export default UserInfo;
