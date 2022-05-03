import React from 'react';

import './TodoInfo.scss';
import { User } from '../../types/user';
import { UserInfo } from '../UserInfo/UserrInfo';

type Props = {
  title: string,
  completed: boolean,
  user: User | null,
};

export const TodoInfo: React.FC<Props> = ({
  title,
  completed,
  user,
}) => {
  return (
    <>
      <h1 className="todo__title">
        {`${title}`}
      </h1>

      <ul className="user__list">
        {user && (
          <UserInfo
            name={user.name}
            userId={user.id}
            email={user.email}
            phone={user.phone}
          />
        )}
      </ul>

      <p className={`todo__completed todo__completed--${completed}`}>
        {completed ? 'Completed' : 'Not completed'}
      </p>
    </>
  );
};
