import React from 'react';

export type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { name, email } = user;

  return (
    <>
      <p>
        <b>Name: </b>
        {name}
      </p>
      <p>
        <b>Email: </b>
        {email}
      </p>
    </>
  );
};
