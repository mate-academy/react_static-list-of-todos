import React from 'react';
import { User } from '../../types/User';

export const UserInfo: React.FC<Partial<User>> = ({
  name,
  username,
  email,
}) => (
  <>
    <div className="user__name">
      {name}
    </div>
    <div className="user__username">
      {username}
    </div>
    <div className="user__email">
      {email}
    </div>
  </>
);
