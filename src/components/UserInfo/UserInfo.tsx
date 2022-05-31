import React from 'react';
import './UserInfo.scss';

interface Props {
  name: string,
  email: string,
}

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    <div
      data-cy="username"
      className="name"
    >
      {name}
    </div>
    <div
      data-cy="email"
      className="userEmail"
    >
      {email}
    </div>
  </>
);
