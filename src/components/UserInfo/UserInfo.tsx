import React from 'react';
import { User } from '../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { username, name, email } = user;

  return (
    <>
      <p>
        {name}
      </p>

      <p>
        {username}
      </p>

      <p>
        {email}
      </p>
    </>
  );
};
