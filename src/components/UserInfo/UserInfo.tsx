import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <div className="userInfo__name">
      <label htmlFor="name">name: </label>
      <div id="name" className="userInfo__item">{user.name}</div>
    </div>
    <div className="userInfo__username">
      <label htmlFor="username">username: </label>
      <div id="username" className="userInfo__item">{user.username}</div>
    </div>
    <div className="userInfo__name">
      <label htmlFor="email">email: </label>
      <div id="email" className="userInfo__item">{user.email}</div>
    </div>
    <div className="userInfo__website">
      <label htmlFor="email">website: </label>
      <div id="email" className="userInfo__item">{user.website}</div>
    </div>
  </div>
);
