import React from 'react';

type Props = {
  user: User,
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="todos__assignee">
    <p className="todos__assignee-name" data-cy="username">
      {`Name: ${user.name}`}
    </p>

    <p className="todos__assignee-email" data-cy="email">
      {`email: ${user.email}`}
    </p>
  </div>
);

export default UserInfo;
