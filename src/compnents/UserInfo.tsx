import React from 'react';
import { User } from '../types/User';

type Props = Pick<User, 'name' | 'email'>;
export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    <div className="todo__item-name">{name}</div>
    <div className="todo__item-email">{email}</div>
  </>
);
