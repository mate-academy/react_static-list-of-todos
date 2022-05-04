import React from 'react';
import './TodoInfo.scss';
import { Todos } from '../../types/interfaces';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo: React.FC<Todos> = ({
  title,
  completed,
  user,
}) => {
  const classTodo = `TodoInfo ${completed ? 'TodoInfo--done' : ''}`;

  return (
    <li className={classTodo}>
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
        {`Progress: ${completed ? 'Done' : 'Not ready'}`}
      </p>
    </li>
  );
};
