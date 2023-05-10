import { FC } from 'react';
import { User } from '../../types/User';

interface UserInfoProps{
  user: User;
}

export const UserInfo: FC<UserInfoProps > = ({ user }) => {
  const { email, name } = user;

  return (
    <>
      {user
      && (
        <a
          className="UserInfo"
          href={`mailto:${email}`}
        >
          {name}
        </a>
      )}
    </>
  );
};
