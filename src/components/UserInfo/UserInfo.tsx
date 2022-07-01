import React from 'react';
import { User } from '../../Types/User';
import './UserInfo.scss';

type Props = {
  user: User;
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div className="user">
      <h2 className="user__name" data-cy="username">{user.name}</h2>
      <a className="user__email" data-cy="email" href={user.email}>
        {user.email}
      </a>
    </div>
  </>
);

export default UserInfo;
