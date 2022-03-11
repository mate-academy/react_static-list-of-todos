import React from 'react';
import './UserTodosItem.scss';

import { UserRequired } from '../../types/User';
import { TodoList } from '../TodoList';
import { UserInfo } from '../UserInfo';

type Props = {
  user: UserRequired
};

export const UserTodosItem: React.FC<Props> = ({ user }) => (
  <>
    <UserInfo
      name={user.name}
      username={user.username}
      email={user.email}
      website={user.website}
    />

    <TodoList
      todoList={user.todos}
    />
  </>
);
