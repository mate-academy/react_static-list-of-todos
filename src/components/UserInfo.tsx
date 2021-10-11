import React from 'react';
import { Person } from '../type/Person';

type Props = {
  person: Person;
};

export const UserInfo: React.FC<Props> = ({ person }) => (
  <>
    <li className="list__item">{person?.name}</li>
    <li className="list__item">{person?.email}</li>
  </>
);
