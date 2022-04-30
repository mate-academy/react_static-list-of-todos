import React from 'react';
import { PreparedTodos } from '../../types/interfaces';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<PreparedTodos> = ({
  id,
  title,
  completed,
  user,
}) => {
  const classNameTodo = `TodoInfo ${completed ? 'TodoInfo--done' : ''}`;

  return (
    <li key={id} className={classNameTodo}>
      <h2 className="TodoInfo__title">{`Task: ${title}`}</h2>
      <p className="TodoInfo__progress">
        {(user === null)
          ? 'No user data'
          : (
            <UserInfo
              name={user.name}
              email={user.email}
            />
          )}
        {`Progress status: ${(completed) ? 'Done' : 'Not ready'}`}
      </p>
    </li>
  );
};
