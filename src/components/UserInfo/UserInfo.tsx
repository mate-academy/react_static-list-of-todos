import React from 'react';

import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  userInfo: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { userInfo } = props;
  const {
    name,
    username,
    email,
  } = userInfo;

  return (
    <div className="user-info">
      <p className="user-info__item">
        {`Name: ${name}`}
      </p>
      <p className="user-info__item">
        {`Username: ${username}`}
      </p>
      <p className="user-info__item">
        {`Email: ${email}`}
      </p>
    </div>
  );
};
