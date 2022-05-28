import React from 'react';
import { User } from '../../react-app-env';

interface Props {
  object: User;
}

export const UserInfo: React.FC<Props> = ({ object }) => (
  <>
    <h2 data-cy="username">{object.name}</h2>
    <a href={`mailto:${object.email}`} data-cy="email">{object.email}</a>
  </>
);
