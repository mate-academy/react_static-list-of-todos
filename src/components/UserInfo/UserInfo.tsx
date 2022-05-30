import React from 'react';
import { User } from '../../react-app-env';

type Props = {
  user: User;
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <div>
    <div className="subtitle is-3" data-cy="username">
      {`Executor: ${user.name}`}
    </div>
    <div data-cy="email">{`email: ${user.email}`}</div>
    <div>{`phone: ${user.phone}`}</div>
    <div>{`from ${user.address.city}`}</div>
  </div>
);

export default UserInfo;
