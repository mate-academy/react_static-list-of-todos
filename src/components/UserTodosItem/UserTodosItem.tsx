import React from 'react';
import './UserTodosItem.scss';

import { Todo, User } from '../../types/types';
import { TodoList } from '../TodoList';
import { UserInfo } from '../UserInfo';

type Props = {
  user: User,
  todos: Todo[],
};

export const UserTodosItem: React.FC<Props> = ({ user, todos }) => (
  <>
    {user && (
      <>
        <UserInfo
          name={user.name}
          username={user.username}
          email={user.email}
          website={user.website}
        />

        <TodoList
          todoList={todos}
        />
      </>
    )}
  </>
);
