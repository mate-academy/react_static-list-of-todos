import React from 'react';
import { UserInfo } from './UserInfo';
import { Todo } from '../types/Todo';
import './TodoInfo.scss';

type Props = Omit<Todo, 'userId' | 'id'>;

export const TodoInfo: React.FC<Props> = ({
  title, completed, user,
}) => (
  <>
    <p className={completed ? 'to-do' : 'done'}>{completed ? 'done' : 'to do'}</p>
    <h2>{title}</h2>
    {user && <UserInfo name={user.name} email={user.email} />}
  </>
);
