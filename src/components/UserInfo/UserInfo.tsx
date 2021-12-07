import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p className="todo__user">
    {`${user.name}, ${user.email}`}
  </p>
);
