import React from 'react';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { name, email } = props.user;

  return (
    <>
      <p>
        {'Name: '}
        {name}
      </p>
      {'Email: '}
      {email}
    </>
  );
};
