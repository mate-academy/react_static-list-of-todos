import React from 'react';

type Props = {
  todo: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { todo } = props;
  const { name, username, email } = todo;

  return (
    <>
      <div className="list__name">{name}</div>
      <div className="list__userName">{username}</div>
      <div className="list__email">{email}</div>
    </>
  );
};
