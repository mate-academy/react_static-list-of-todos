import React from 'react';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { name, email } = user;

  return (
    <>
      <td>{name}</td>
      <td>{name}</td>
      <td>{email}</td>
    </>
  );
};
