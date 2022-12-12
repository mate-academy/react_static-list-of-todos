import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo:React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user ? user.email : ''}`}>
    {user ? user.name : ''}
  </a>
);
