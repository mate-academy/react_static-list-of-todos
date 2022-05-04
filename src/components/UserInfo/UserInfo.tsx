import React from 'react';
import { Users } from '../../type/Users';
import './UserInfo.scss';

type Props = {
  props: Users;
};

export const UserInfo: React.FC<Props> = ({ props }) => (
  <ul className="user">
    <li className="user__name">
      {`For ${props.name} ${props.username}`}
    </li>
    <li className="user__email">{props.email}</li>
    <li className="user__phone">{props.phone}</li>
    <li className="user__site">{props.website}</li>
  </ul>
);
