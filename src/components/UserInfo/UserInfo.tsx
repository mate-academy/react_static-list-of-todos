import React from 'react';

import { User } from '../types/Users';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <>
      <p className="todo__name">
        {user !== null ? user.name : 'Unknown name'}
      </p>
      <p className="todo_mail">
        {user !== null ? user.email : 'No email'}
      </p>
    </>
  );
};
