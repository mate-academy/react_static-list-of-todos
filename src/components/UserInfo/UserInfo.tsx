import React from 'react';
import { Users } from '../../types/user';

import './UserInfo.scss';

type Props = {
  user: Users;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p>{`Name: ${user.name}`}</p>
    <p className="email">{`Email: ${user.email}`}</p>
  </>
);
