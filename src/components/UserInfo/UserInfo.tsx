import React from 'react';

type Props = {
  name: string | undefined,
  email: string | undefined,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    <p>
      {'Responsible for implementation: '}
      <strong>{name}</strong>
    </p>

    <p>
      {'Contact Email: '}
      <strong>{email}</strong>
    </p>
  </>
);
