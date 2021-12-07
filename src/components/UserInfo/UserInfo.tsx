import React from 'react';
import { User } from '../../types/Types';

type Props = {
  user: User,
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {user.name}
    <br />
    {user.email}
  </>
);

export default UserInfo;
