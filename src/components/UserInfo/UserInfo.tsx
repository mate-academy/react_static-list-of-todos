import React from 'react';

type Custom = {
  email: string,
  name: string,
};

export const UserInfo: React.FC<Custom> = ({ email, name }) => (
  <a className="UserInfo" href={email || ''}>
    {name || ''}
  </a>
);
