import React from 'react';
import { Todo } from '../../types/Todo';

export const TodoInfo: React.FC<Todo> = ({ title, user }) => {
  if (user) {
    return (
      <>
        <h2 className="TodoInfo__title">{title}</h2>
        <a className="UserInfo" href={user.email}>
          {user.name}
        </a>
      </>
    );
  }

  return <></>;
};
