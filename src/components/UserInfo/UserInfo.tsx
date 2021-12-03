import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ name, email }) => {
  return (
    <div className="user">
      <h5 className="user__name">
        {`Name: ${name} `}
      </h5>
      <a href={`mailto:${email}`} className="user__email">
        {`Email: ${email} `}
      </a>
    </div>
  );
};
