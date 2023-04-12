import { FC } from 'react';
import { User } from '../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: FC<Props> = ({
  user,
}) => (
  <a className="UserInfo" href={`mailto:${user?.email}` || 'Unknown email'}>
    {user?.name || 'Unknown user'}
  </a>
);
