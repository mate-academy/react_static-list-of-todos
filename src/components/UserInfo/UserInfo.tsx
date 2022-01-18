import React from 'react';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p className="task__ownerInfo">
    {'Owner: '}
    {user?.name}
    {' mail: '}
    {user?.email}
  </p>
);
