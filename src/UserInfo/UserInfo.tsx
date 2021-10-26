import React from 'react';
import { User } from '../types/User';

type Props = {
  todoUser: User,
};

export const UserInfo:React.FC<Props> = ({ todoUser }) => (
  <>
    <td>{todoUser.name}</td>
    <td>{todoUser.email}</td>
  </>
);
