import React from 'react';
import { User } from '../../types/Users';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <div className="userInfo__name">
      <h3>{`Name: ${user.name}`}</h3>
    </div>

    <div className="userInfo__userName">
      <h4>{`Username: ${user.username}`}</h4>
    </div>

    <div className="userInfo__email">
      <h5>{`Email: ${user.email}`}</h5>
    </div>

    <div className="userInfo__website">
      <p>{`Website: ${user.website}`}</p>
    </div>
  </div>
);
