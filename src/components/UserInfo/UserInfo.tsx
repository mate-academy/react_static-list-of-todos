import { FC } from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: FC<Props> = ({
  user: {
    name,
    email,
  },
}) => {
  const link = `mailto:${email}`;

  return (
    <a className="UserInfo" href={link}>
      {name}
    </a>
  );
};
