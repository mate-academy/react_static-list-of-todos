import React from 'react';

type Props = {
  userProp: User
};

export const UserInfo: React.FC<Props> = ({ userProp }) => (
  <>
    <p data-cy="username">{userProp.name}</p>
    <p data-cy="email">{userProp.email}</p>
  </>
);
