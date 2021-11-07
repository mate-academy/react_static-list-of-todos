import React from 'react';
import { User } from '../type/User';

type TodoInfoOfUser = {
  todo: User | null | undefined;
};

export const TodoInfo:React.FC<TodoInfoOfUser> = ({ todo }) => (
  <>
    {todo?.name}
    <br />
    {todo?.email}
  </>
);
