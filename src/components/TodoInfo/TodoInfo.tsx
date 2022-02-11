import React from 'react';
import { User } from '../../types/User';
import UserInfo from '../UserInfo';

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
  const status = completed ? 'completed' : 'uncompleted';

  return (
    <>
      <h2 className="todos__title">{title}</h2>
      <p className="todos__status">{`Status: ${status}`}</p>
      {user && (
        <div className="todos__user">
          <UserInfo
            name={user.name}
            email={user.email}
          />
        </div>
      )}
    </>
  );
};
