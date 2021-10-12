import React from 'react';

type Props = {
  name: string;
  username: string;
  email: string;
};

export const UserInfo: React.FC<Props> = ({
  name,
  email,
  username,
}) => (
  <>
    <span>{username}</span>
    <span>{name}</span>
    <span>{email}</span>
  </>
);
