import React from 'react';
import { User } from '../../react-app-env';

type Props = {
  user: User;
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h3 className="title is-3" data-cy="username">{user.name}</h3>
    <div data-cy="email">{`Email: ${user.email}`}</div>
  </>
);

export default UserInfo;
