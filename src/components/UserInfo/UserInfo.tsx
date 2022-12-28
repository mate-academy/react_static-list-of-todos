import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User | null,
};
// Add the required types and props
export const UserInfo: React.FC<Props> = ({ user }) => (
  user
    ? (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    )
    : (
      <p className="UserInfo">
        User not found
      </p>
    )
);
