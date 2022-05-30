import React from 'react';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="about-user">
    <p data-cy="username">{`User: ${user.name}`}</p>
    <p data-cy="email">{`Email:${user.email}`}</p>
  </div>
);
