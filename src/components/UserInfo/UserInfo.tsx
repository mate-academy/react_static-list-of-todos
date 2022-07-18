import React from 'react';
import { User } from '../../types/User';

// Add the required types and props
type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {user && (
      <>
        <p>{user.name}</p>
        <a className="UserInfo" href={user.email}>
          {user.email}
        </a>
      </>
    )}
  </>
);
