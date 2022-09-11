import { FC } from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

// Add the required types and props
export const UserInfo: FC<{ user:User }> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
