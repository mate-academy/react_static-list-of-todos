import React from 'react';
import { TodoUser } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todoInfo: TodoUser
};

export const TodoInfo: React.FC<Props> = ({ todoInfo }) => {
  const { title, completed, user } = todoInfo;

  return (
    <div>
      <h2 className="info">
        {title}
      </h2>
      {user && (
        <p className="info__user">
          <UserInfo user={user} />
        </p>
      )}
      <p>
        {`${completed ? 'Completed!' : 'In progress...'}`}
      </p>
    </div>
  );
};
