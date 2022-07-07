import React from 'react';

type Props = {
  user: User;
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <p className="user__name" data-cy="username">
      {user.name}
    </p>

    <p className="email" data-cy="email">
      {user.email}
    </p>
  </div>
);

export default UserInfo;
