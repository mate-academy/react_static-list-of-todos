import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { ToDo } from '../../types/ToDo';

type Props = {
  todo: ToDo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    {todo.user ? <UserInfo user={todo.user} /> : 'User not found'}
    <span>{todo.title}</span>
    <span>{todo.completed ? 'Completed' : 'In progres...'}</span>
  </>
);
