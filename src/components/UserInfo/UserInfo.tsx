import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  userInfo: Omit<User, 'id'>
};

export const UserInfo: React.FC<Props> = (props) => {
  const { userInfo } = props;
  const { name, email } = userInfo;

  return (
    <div className="UserInfo">
      <p>{name}</p>
      <a className="UserInfo__email" href={`mailto:${email}`}>{email}</a>
    </div>
  );
};
