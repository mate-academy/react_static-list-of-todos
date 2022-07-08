import { FC } from 'react';
import { User } from '../types';

interface UserInfoProps {
  user: User | null;
}

const UserInfo: FC<UserInfoProps> = ({ user }) => (
  <>
    {user && (
      <>
        <h4 data-cy="username">{user.name}</h4>
        <p data-cy="email">{user.email}</p>
      </>
    )}
  </>
);

export default UserInfo;
