import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    id,
    name,
    email,
  } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`} id={`${id}`}>
      {name}
    </a>
  );
};
