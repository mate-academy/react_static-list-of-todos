import React from 'react';
import { User } from '../types/User';

type Props = {
  // eslint-disable-next-line react/require-default-props
  user?: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {` User name: ${user?.name}`}
    {` User email: ${user?.email}`}
  </>
);
