import React from 'react';
import { PreparedTodo } from '../../types/PreparedTodo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = Partial<PreparedTodo>;

export const TodoInfo: React.FC<Props> = ({
  title,
  completed,
  user,
}) => {
  return (
    <div className="TodoInfo">
      <h4>{`Todo name: ${title}`}</h4>
      <span>{completed ? 'Completed' : 'Not completed'}</span>
      {user && <UserInfo name={user.name} email={user.email} />}
    </div>
  );
};
