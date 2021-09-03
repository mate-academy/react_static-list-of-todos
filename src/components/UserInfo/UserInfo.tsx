import React from 'react';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { username, name, email } = user;

  return (
    <>
      <td>{username}</td>
      <td>{name}</td>
      <td>{email}</td>
    </>
  );
};
