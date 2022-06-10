import React from 'react';
import { UserInfoProps } from '../../types';

const UserInfo: React.FC<UserInfoProps> = ({ user = {} }) => (
  <>
    <br />
    {user !== null && (
      <span>
        <span data-cy="username">
          {`Owner: ${user.username}`}
          <br />
          {`Real name: ${user.name}`}
        </span>
        <br />
        <br />
        <span data-cy="email">
          {`Email: ${user.email}`}
        </span>
        <br />
        {`Phone: ${user.phone
          ? (user.phone).split(' ')[0]
          : 'no phone number provided'}`}
      </span>
    )}
    <br />
  </>
);

export default UserInfo;
