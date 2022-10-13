import React from 'react';

import { User } from '../../types/User';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href="mailto:Sincere@april.biz">
    {user.name}
  </a>
);
