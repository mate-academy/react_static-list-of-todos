import React from 'react';

import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  user && (
    <div className="user">
      <span className="user__name">{`${user.name}. `}</span>
      <span className="user__email">{`${user.email}`}</span>
    </div>
  )
);
