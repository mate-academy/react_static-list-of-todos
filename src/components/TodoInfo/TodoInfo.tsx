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
    <div data-cy="title">
      {title}
    </div>
    <span data-cy="status">
      {completed ? 'Mission completed!' : 'Not complete yet'}
    </span>
    {user ? (
      <UserInfo
        name={user.name}
        email={user.email}
      />
    ) : null}
  </>
);
