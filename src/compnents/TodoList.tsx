import React from 'react';
import { PreparedTodo } from '../types/PreparedTodo';
import { TodoInfo } from './TodoInfo';
import { UserInfo } from './UserInfo';

type Props = Pick<PreparedTodo, 'user' | 'title' | 'completed'>;

export const TodoList: React.FC<Props> = ({ user, title, completed }) => (
  <>
    <UserInfo name={user ? user.name : 'not found'} email={user ? user.email : 'not found'} />
    <TodoInfo title={title} completed={completed} />
  </>
);
