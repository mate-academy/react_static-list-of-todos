import React from 'react';
import { User } from '../../types/User';

type Props = Pick<User, 'name' | 'email'>;

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  return (
    <div className="UserInfo">
      <span className="UserInfo__Name">
        User name:
        {' '}
        {name}
      </span>
      <p className="UserInfo__Email">{`Email: ${email}`}</p>
    </div>
  );
};
