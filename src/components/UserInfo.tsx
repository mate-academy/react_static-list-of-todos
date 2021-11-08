import { FC } from 'react';
import { User } from '../typedefs';

interface Props {
  user: User;
}

export const UserInfo: FC<Props> = (props) => {
  const { user } = props;

  const { name, email } = user;

  return (
    <>
      <p className="userCard__name">{name}</p>
      <p className="userCard__email">{email}</p>
    </>
  );
};
