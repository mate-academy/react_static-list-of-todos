import React from 'react';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { name, username, email } = user;

  return (
    <>
      <div className="user">{name}</div>
      <div className="user">{username}</div>
      <div className="user">{email}</div>
    </>
  );
};
