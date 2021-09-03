import React from 'react';
import { User } from '../../types/Todo';

type Props = {
  todo: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { todo } = props;
  const { name, username, email } = todo;

  return (
    <>
      <div>{name}</div>
      <div>{username}</div>
      <div>{email}</div>
    </>
  );
};
