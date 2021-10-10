import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = Pick<User, 'name' | 'email'>;

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    <div className="todo__name">
      {name}
    </div>
    <div className="todo__email">
      {email}
    </div>
  </>
);
