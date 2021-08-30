import React from 'react';

import { User } from '../../types/User';
import './UserInfo.scss';

export const UserInfo: React.FC<User> = (props) => {
  const {
    name,
    username,
    email,
  } = props;

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
