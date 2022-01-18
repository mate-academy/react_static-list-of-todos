import React from 'react';
import { UserInfo } from '../UserInfo';

export const TodoInfo: React.FC<Todo> = ({
  title,
  completed,
  user,
}) => (
  <>
    <h1>{title}</h1>

    {user && (
      <UserInfo
        name={user.name}
        username={user.username}
        email={user.email}
      />
    )}
    <br />
    {completed
      ? <span><i>Well done</i></span>
      : <span><i>Not completed</i></span>}
  </>
);
