import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h3>{user !== null ? user.name : 'Anonym'}</h3>
    <p>{user !== null ? user.email : 'No email found'}</p>
    <p>{user !== null ? user.phone : 'No phone found'}</p>
  </>
);
