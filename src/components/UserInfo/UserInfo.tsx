import React from 'react';
import { User } from '../Types/Types';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {`Name: ${user.name}`}
    <br />
    {`Email: ${user.email}`}
  </>
);
