import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({
  user: {
    id,
    name,
    email,
  },
}) => (
  <a
    className="UserInfo"
    href={`mailto:${email}`}
    id={`${id}`}
  >
    {name}
  </a>
);
