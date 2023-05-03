import { FC } from 'react';
import { User } from '../../types/User';

// Add the required types and props

interface Props{
  user:User;
}

export const UserInfo: FC<Props > = ({ user }) => {
  const {
    id,
    name,
    email,
  } = user;

  return (
    <a key={`${id}`} className="UserInfo" href={email}>
      {name}
    </a>
  );
};
