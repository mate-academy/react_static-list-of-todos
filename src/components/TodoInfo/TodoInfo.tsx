import React from 'react';
import { PreparedTodos } from '../../types/interfaces';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  elem: PreparedTodos,
};

export const TodoInfo: React.FC<Props> = ({ elem }) => {
  const { title, completed, user } = elem;
  const classNameTodo = `todoInfo ${completed ? 'todoInfo--done' : ''}`;

  return (
    <li className={classNameTodo}>
      <h2 className="todoInfo__title">{`Task: ${title}`}</h2>
      <p className="todoInfo__progress">
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
