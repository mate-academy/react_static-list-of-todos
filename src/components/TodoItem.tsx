import React from 'react';
import { Todo } from '../types/Todo';
import { UserInfo } from './UserInfo';

export const TodoItem: React.FC<Todo> = ({
  title,
  user,
}) => (
  <>
    <span>
      {`Task: ${title}. `}
    </span>
    {user && (
      <div className="badge badge-light">
        <UserInfo {...user} />
      </div>
    )}
  </>
);
