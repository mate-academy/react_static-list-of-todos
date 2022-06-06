import React from 'react';
import { Company } from '../../types';

interface Props {
  name: string,
  email: string,
  company: Company,
}

export const UserInfo: React.FC<Props> = ({ name, email, company }) => {
  return (
    <ul>
      <li data-cy="username">{name}</li>
      <li data-cy="email">{email}</li>
      <li>{`Company: ${company.name}`}</li>
    </ul>
  );
};
