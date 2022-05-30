import React from 'react';
import './UserInfo.scss';

type Props = {
  username: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ username, email }) => (
  <div className="about-user">
    <p data-cy="username">{`User: ${username}`}</p>
    <p data-cy="email">{`Email:${email}`}</p>
  </div>
);
