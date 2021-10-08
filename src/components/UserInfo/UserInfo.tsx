import React from 'react';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = (props) => {
  const { name, email } = props.user;

  return (
    <>
      {`My name is: ${name} and my email is: ${email}`}
    </>
  );
};
