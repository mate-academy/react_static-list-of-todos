import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User;
};

const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { name, username, email } = user;

  return (
    <>
      <div className="username">{name}</div>
      <div>{username}</div>
      <div>{email}</div>
    </>
  );
};

export default UserInfo;
