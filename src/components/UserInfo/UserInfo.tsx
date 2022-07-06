import React from 'react';

import './UserInfo.scss';

type Props = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    <span className="userInfo">
      {' - '}
      {name}
      {'  -  '}
      {email}
    </span>

  </>
);

export default UserInfo;
