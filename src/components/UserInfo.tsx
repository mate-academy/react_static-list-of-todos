import React from 'react';
import { User } from '../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { name, email } = user;

  return (
    <span>
      {`Responsible: ${name}. Email: ${email}`}
    </span>
  );
};
