import React from 'react';
import { PreparedUser } from '../../Types/PreparedTodosType';

export const UserInfo: React.FC<PreparedUser> = ({ name, email }) => (
  <>
    <h3>{name}</h3>
    <p>{email}</p>
  </>
);
