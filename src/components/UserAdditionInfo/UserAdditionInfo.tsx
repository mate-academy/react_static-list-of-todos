import React from 'react';
import { User } from '../../react-app-env';

type Props = {
  user: User;
};

export const UserAdditionInfo: React.FC<Props> = ({ user }) => (
  <div>{user.website}</div>
);
