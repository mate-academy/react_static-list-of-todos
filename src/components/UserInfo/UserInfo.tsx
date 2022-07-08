import React from 'react';
import { User } from '../../types/User';

export type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="ui block bottom attached header">
    <p>{user.name || 'No User name info'}</p>
    <div className="ui divider" />
    <p>{user.phone || 'No User phone info'}</p>
    <p>{user.email || 'No User email info'}</p>
  </div>
);
