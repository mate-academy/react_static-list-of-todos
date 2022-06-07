import React from 'react';
import { User } from '../../types/Types';

type Props = {
  user: User,
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h3 data-cy="username">
      Username:
      {user.name}
    </h3>
    <span data-cy="email">
      Email:
      {user.email}
    </span>
  </>
);

export default UserInfo;
