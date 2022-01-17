import React from 'react';
import { UserInfo } from '../UserInfo';

import './TodoInfo.scss';

export const TodoInfo: React.FC<Todo> = ({
  title,
  completed,
  user,
}) => (
  <>
    <h1>{title}</h1>

    <UserInfo
      name={user
        ? user.name
        : 'No name'}
      username={user
        ? user.username
        : 'No username'}
      email={user
        ? user.email
        : 'No email'}
    />
    <br />
    {completed
      ? <span><i>Well done</i></span>
      : <span><i>Not completed</i></span>}
  </>
);
