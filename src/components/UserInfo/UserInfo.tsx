import React from 'react';

import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <strong className="user-info__name">Name:</strong>
    {' '}
    <span className="user-info__name">{user.name}</span>
    <br />
    <strong className="user-info__email">Email:</strong>
    {' '}
    <span className="user-info__email--link">{user.email}</span>
  </div>
);
