import React from 'react';
import { User } from '../types/User';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <td>
      {user?.email}
    </td>
    <td>
      {user?.name}
    </td>
  </>
);
