import React from 'react';
import './UserInfo.scss';

import { User } from '../../types/User';

interface Props {
  user: User
}

export const UserInfo:React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
