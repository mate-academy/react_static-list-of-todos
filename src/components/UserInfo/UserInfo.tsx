import React from 'react';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="UserInfo">
      <h3 className="UserInfo__user">{`${user.name}`}</h3>
      <div className="UserInfo__email">{`${user.email}`}</div>
    </div>
  );
};
