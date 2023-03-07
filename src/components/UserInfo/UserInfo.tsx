import { FC } from 'react';

import { User } from '../../types/User';

export const UserInfo: FC<Pick<User, 'name' | 'email'>> = ({ name, email }) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>
);
