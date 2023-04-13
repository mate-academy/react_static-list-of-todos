// Add the required types and props
import React from 'react';
// import { URLSearchParams } from 'url';
import { User } from '../../types/User';

interface UserInfoProps {
  user: User;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      <p>
        mailto:
        {user.email}
      </p>
      <p>
        {user.name}
      </p>
    </a>
  );
};
