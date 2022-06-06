import React from 'react';

import { User } from '../../types';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p>{`Name: ${user.name}`}</p>
    <p>{`E-mail: ${user.email}`}</p>
  </>
);
