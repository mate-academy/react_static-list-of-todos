import React from 'react';

import { PreparedTodos } from '../../types/preparedTodos';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  user: PreparedTodos,
};

export const TodoInfo: React.FC<Props> = ({ user }) => (
  <>
    <h2>{user.title}</h2>
    <p>{user.completed ? 'Status: complited' : 'Status: not complited' }</p>
    {user.user && <UserInfo user={user.user} />}
  </>
);
