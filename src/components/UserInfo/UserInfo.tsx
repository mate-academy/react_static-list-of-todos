import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <>
      <div className="username">{user.name}</div>
      <div>{user.username}</div>
      <div>{user.email}</div>
    </>
  );
};

export default UserInfo;
