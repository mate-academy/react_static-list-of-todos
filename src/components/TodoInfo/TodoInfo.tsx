import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { User } from '../../type/types';

import './TodoInfo.scss';

type Props = {
  title: string;
  completed: boolean;
  user: User | null;
};

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => (
  <>
    <span data-cy="title">
      {title}
    </span>
    <span data-cy="status">
      {completed}
    </span>
    {user ? (
      <UserInfo
        name={user.name}
        email={user.email}
      />
    ) : null}
  </>
);
