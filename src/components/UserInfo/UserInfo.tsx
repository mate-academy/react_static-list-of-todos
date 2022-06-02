import React from 'react';

type Props = {
  name: string | undefined,
  email: string | undefined,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  const nameIs: string = typeof (name) === 'string' ? name : 'Name not found';

  return (
    <>
      <p className="item__name" data-cy="username">{nameIs}</p>

      <p className="item__email" data-cy="email">{email}</p>
    </>
  );
};
