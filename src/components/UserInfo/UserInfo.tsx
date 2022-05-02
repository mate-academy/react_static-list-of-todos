import React from 'react';
import { User } from '../../types/types';
import './UserInfo.scss';

type Props = {
  user: User
};
export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h3>
      {user.name}
    </h3>
    <a href={`mailto:${user.email}`} className="user_link">{user.email}</a>
  </>
);
