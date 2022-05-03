import React from 'react';
import { User } from '../../types/Todo';
import './UserInfo.scss';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p className="user__info">
    <div className="user__info-item">
      <span className="user__info-title">Assigned:</span>
      {' '}
      {user?.name}
    </div>
    <a className="user__info-link" href={`mailto:${user?.email}`}>Email</a>
  </p>
);
