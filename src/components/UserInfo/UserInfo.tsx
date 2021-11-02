import React from 'react';
import './UserInfo.scss';

import { User } from '../types/Type';

type Props = {
  person: User
};

export const UserInfo: React.FC<Props> = ({ person }) => (
  <>
    <p>{person.name}</p>
    <p>{person.email}</p>
  </>
);
