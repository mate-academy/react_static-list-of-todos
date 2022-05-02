import React from 'react';
import { PreparedTodos } from '../../types/interfaces';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<PreparedTodos> = ({
  title,
  completed,
  user,
}) => {
  const classNameTodo = `TodoInfo ${completed ? 'TodoInfo--done' : ''}`;

  return (
    <li className={classNameTodo}>
      <h2 className="TodoInfo__title">{`Task: ${title}`}</h2>
      <p className="TodoInfo__progress">
        {(user === null)
          ? 'No user data'
          : (
            <UserInfo
              id={user.id}
              name={user.name}
              email={user.email}
            />
          )}
        {`Progress status: ${(completed) ? 'Done' : 'Not ready'}`}
      </p>
    </li>
  );
};
