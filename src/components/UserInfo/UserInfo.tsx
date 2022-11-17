import React from 'react';

import { User } from '../../types/User';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;
  const mailto = `mailto:${email}`;

  return (
    <a className="UserInfo" href={mailto}>
      {name}
    </a>
  );
};
