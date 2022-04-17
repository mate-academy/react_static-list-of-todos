import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

const UserInfo: React.FC<User> = ({
  name,
  username,
  email,
}) => (
  <>
    <span className="nameOfUser">
      {' '}
      {name}
    </span>
    <span> *** </span>
    <span className="userAlias">
      {username}
    </span>
    <span> *** </span>
    <span className="userEmail">
      {email}
    </span>
  </>
);

export default UserInfo;
