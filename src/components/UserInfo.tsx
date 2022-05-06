import React from 'react';
import { User } from '../data/user';

type Props = {
  user: User | null,
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p>
      name :
      {user?.name}
    </p>
    <p>
      email :
      {user?.email}
    </p>
  </>
);

export default UserInfo;
