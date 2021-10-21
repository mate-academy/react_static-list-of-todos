import React from 'react';
import { User } from '../../types/Type';

import './UserInfo.scss';

type Props = {
  person: User
};

export const UserInfo: React.FC<Props> = ({ person }) => (
  <>
    <p className="user__name">{person.name}</p>
    <p className="user__email">{person.email}</p>
  </>
);
