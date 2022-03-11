import React from 'react';
import './UserTodosList.scss';

import { UserRequired } from '../../types/User';
import { UserTodosItem } from '../UserTodosItem';

type Props = {
  users: UserRequired[];
};

export const UserTodosList: React.FC<Props> = ({ users }) => (
  <>
    {users.map(user => (
      user && (
        <div key={user.id} className="UserTodosItem">
          <UserTodosItem user={user} />
        </div>
      )
    ))}
  </>
);
