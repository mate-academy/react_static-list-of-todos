import React from 'react';
import { User } from '../../type/typeUser';

type Props = {
  user: User;
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p>
      {'Name: '}
      {user.name}
    </p>

    <p>
      {'Email: '}
      {user.email}
    </p>
  </>
);

export default UserInfo;
