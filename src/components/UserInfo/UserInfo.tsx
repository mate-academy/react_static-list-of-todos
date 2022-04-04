import React from 'react';
import './UserInfo.scss';

type Props = {
  id: number,
  name: string,
  username: string,
  email:string,
  phone: string,
};

export const UserInfo: React.FC<Props> = ({
  id,
  name,
  username,
  email,
  phone,
}) => (
  <div className="user">
    <div className="user__title">
      {name}
    </div>
    <ul className="user__list">
      <li className="user__info">
        <span className="user__text">ID: </span>
        {id}
      </li>
      <li className="user__info">
        <span className="user__text">User name: </span>
        {username}
      </li>
      <li className="user__info">
        <span className="user__text">E-mail: </span>
        {email}
      </li>
      <li className="user__info">
        <span className="user__text">Phone: </span>
        {phone}
      </li>
    </ul>
  </div>
);
