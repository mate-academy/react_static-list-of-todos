import React from 'react';
import { User } from '../../types';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <span>
      {user.name}
    </span>
    <span>
      {`Email: ${user.email}`}
    </span>
  </>
);
