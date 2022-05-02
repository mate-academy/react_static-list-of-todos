import React from 'react';

type Props = {
  name?: string | null,
  email?: string | null,
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

UserInfo.defaultProps = {
  name: null,
  email: null,
};
