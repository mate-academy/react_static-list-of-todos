import React from 'react';

import { User } from '../../types/interface';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p>
      {`Name: ${user ? user.name : null}`}
    </p>
    <p>
      {`Email: ${user ? user.email : null}`}
    </p>
  </>
);
