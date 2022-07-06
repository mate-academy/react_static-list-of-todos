import React from 'react';
import { User } from '../../react-app-env';

import './UserInfo.scss';

type Props = {
  user: User | null | undefined,
};

const UserInfo: React.FC<Props> = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <>
      <div className="user-info" data-cy="username">
        {`Name: ${user.name}`}
      </div>
      <div className="user-info user-info__last" data-cy="email">
        {`Email: ${user.email}`}
      </div>
    </>
  );
};

export default UserInfo;
