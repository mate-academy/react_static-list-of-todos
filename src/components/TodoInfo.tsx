import React from 'react';
import { UserInfo } from './UserInfo';
import { Todo } from '../types/Todo';

type Props = Omit<Todo, 'userId' | 'id'>;

export const TodoInfo: React.FC<Props> = ({
  title, completed, user,
}) => (
  <>
    <input className="check" type="checkbox" checked={completed} />
    <h2 className="title">
      {title}
    </h2>
    {user && <UserInfo name={user.name} email={user.email} />}
  </>
);
