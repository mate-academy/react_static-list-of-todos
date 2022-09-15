import React from 'react';
import { User } from '../../types/User'

type Prop = {
  user: User;
}


export const UserInfo: React.FC<Prop> = ({ user }) => {
  const {
    name,
    email
  } = user

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
}
