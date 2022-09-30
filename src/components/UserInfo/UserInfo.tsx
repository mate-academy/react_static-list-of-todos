import React from 'react';
import { User } from '../../types/User';

type Props = {
  human: User | null;
};

export const UserInfo: React.FC<Props> = ({ human }) => (
  <a
    className="UserInfo"
    href={`mailto:${human?.email}`}
  >
    {human?.name}
  </a>
);
