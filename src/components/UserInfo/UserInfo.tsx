import React from 'react';

type Props = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    <h2 className="name" data-cy="username">
      {name}
    </h2>
    <p data-cy="email">
      {`Email: ${email}`}
    </p>
  </>
);
