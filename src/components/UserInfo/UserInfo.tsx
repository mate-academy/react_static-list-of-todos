import React from 'react';
import './UserInfo.scss';

type Props = {
  name: string,
  username: string,
  email: string,
  phone: string,
};

export const UserInfo: React.FC<Props> = (
  {
    name,
    username,
    email,
    phone,
  },
) => (
  <ul className="user-info">
    <li>
      <span className="user-info__label">Name:</span>
      <span>{name}</span>
    </li>
    <li>
      <span className="user-info__label">Username:</span>
      <span>{username}</span>
    </li>
    <li>
      <span className="user-info__label">Email:</span>
      <span>{email}</span>
    </li>
    <li>
      <span className="user-info__label">Phone:</span>
      <span>{phone}</span>
    </li>
  </ul>
);
