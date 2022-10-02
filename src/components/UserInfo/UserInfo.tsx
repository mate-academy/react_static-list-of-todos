// Add the required types and props
import React from 'react';
import { User } from '../../types/User';

type UserProps = {
  user: User | null;
};

export const UserInfo: React.FC<UserProps> = ({ user }) => {
  if (user) {
    const { email, name } = user;
    const mailTo = `mailto:${email}`;

    return (
      <a className="UserInfo" href={mailTo}>
        {name}
      </a>
    );
  }

  return <></>;
};
