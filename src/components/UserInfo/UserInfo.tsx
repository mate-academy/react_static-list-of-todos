import React from 'react';
import { Todo } from '../../types/Todo';

export const UserInfo: React.FC<Todo> = ({ title, user }) => (
  <>
    <h2
      className="TodoInfo__title"
    >
      {title}
    </h2>
    <a className="UserInfo" href={user?.email}>
      {user?.name}
    </a>
  </>
);
