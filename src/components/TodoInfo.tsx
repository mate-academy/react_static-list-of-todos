import React from 'react';
import { Todo } from '../types/Todo';
import { UserInfo } from './UserInfo';

export const TodoInfo: React.FC<Todo> = ({
  title,
  completed,
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
    {completed && (
      <span className="float-right">
        Done
      </span>
    )}
  </>
);
