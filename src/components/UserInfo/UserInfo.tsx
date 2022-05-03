import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ name, email, phone }) => (
  <div className="user-info">
    <h3 className="user-info__name">{name}</h3>
    <span className="user-info__email-container">
      <a className="user-info__email" href={`mailto:${email}`}>{email}</a>
    </span>
    <div className="user-info__phone">
      Phone:
      {phone}
    </div>
  </div>
);
