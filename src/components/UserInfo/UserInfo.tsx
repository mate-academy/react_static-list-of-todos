import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <p className="user-info__item">
      <span className="user-info__title">Assigned:</span>
      {' '}
      {user?.name}
    </p>
    <a className="user-info__link" href={`mailto:${user?.email}`}>Email</a>
  </div>
);
