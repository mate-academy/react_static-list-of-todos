import React from 'react';
import { User } from '../type/User';

interface Props {
  user: User;
}

export const UserInfo:React.FC<Props> = ({ user }) => (
  <>
    {user?.name}
    <br />
    {user?.email}
  </>
);
