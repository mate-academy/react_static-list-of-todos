import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo:React.FC<Props> = ({ user }) => (
  <a
    className="UserInfo card-link text-white fst-italic text-decoration-none"
    href={`mailto:${user.email}`}
  >
    {user.name}
  </a>
);
