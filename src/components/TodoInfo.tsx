import React from 'react';
import { User } from '../type/User';

type TodoInfoOfUser = {
  user: User | null | undefined;
};

export const TodoInfo:React.FC<TodoInfoOfUser> = ({ user }) => (
  <>
    {user?.name}
    <br />
    {user?.email}
  </>
);
