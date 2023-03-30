import React from 'react';
import { User } from '../../types/User';

interface Props {
  user: User | null;
}
// Add the required types and props
export const UserInfo: React.FC<Props> = ({ user }) => (
  <a
    className="UserInfo"
    href={`mailto:${user?.email}`}
  >
    {user?.name}
  </a>
);
