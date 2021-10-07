import React from 'react';

type Props = {
  name: string;
  username: string;
  email: string;
};

export const UserInfo: React.FC<Props> = props => {
  const {
    name,
    email,
    username,
  } = props;

  return (
    <>
      <span>{username}</span>
      <span>{name}</span>
      <span>{email}</span>
    </>
  );
};
