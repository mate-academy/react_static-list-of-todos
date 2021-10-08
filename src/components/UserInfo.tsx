import React from 'react';
import { ForPreparedTodos } from '../react-app-env';

type Prop = {
  userItem: ForPreparedTodos,
};

export const UserInfo: React.FC<Prop> = ({ userItem }) => {
  const { user } = userItem;

  return (
    <>
      Name:
      {user ? user.name : 'did not log'}
      , email:
      {user ? user.email : 'did not log'}
    </>
  );
};
