import React from 'react';

import './UserInfo.scss';

type Props = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  return (
    <div className="user">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};
