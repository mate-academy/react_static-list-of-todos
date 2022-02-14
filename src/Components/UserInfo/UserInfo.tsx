import React from 'react';
import { User } from '../../types';

type Props = {
  user: User,
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <div>
    <div className="card__user-name">{user.name}</div>
    <div className="card__user-email">{user.email}</div>
  </div>
);

export default UserInfo;
