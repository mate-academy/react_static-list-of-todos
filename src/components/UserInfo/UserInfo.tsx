import React from 'react';

import { User } from '../../types/User';

type Props = Pick<User, 'name' | 'email'>;

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    {name && (
      <p>
        {'Responsible for implementation: '}
        <strong>{name}</strong>
      </p>
    )}

    {email && (
      <p>
        {'Contact Email: '}
        <strong>{email}</strong>
      </p>
    )}
  </>
);
