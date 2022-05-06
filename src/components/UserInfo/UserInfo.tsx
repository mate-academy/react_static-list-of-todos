import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <p className="user-info__item">
      <strong
        className="user-info__title"
      >
        Assigned:
      </strong>
      {' '}
      {user?.name}
    </p>
    <a className="user-info__link" href={`mailto:${user?.email}`}>Email</a>
  </div>
);
