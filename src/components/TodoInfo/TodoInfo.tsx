import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

export const TodoInfo: React.FC<Todo> = ({
  id,
  userId,
  title,
  completed,
  user,
}) => (
  <>
    <div>
      <p>
        {id}
      </p>
      <p>
        {userId}
      </p>
      <p>
        {title}
      </p>
      <p>
        {completed}
      </p>
      <p>
        <UserInfo {...user} />
      </p>
    </div>
  </>
);
