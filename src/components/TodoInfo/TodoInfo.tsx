import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

type User = {
  name: string,
  email: string
};

interface Todo {
  userId: number,
  id: number,
  title: string | undefined,
  completed: boolean,
  user: User | undefined;
}

export const TodoInfo: React.FC <Todo> = ({
  title,
  completed,
  user,
}) => {
  return (
    <>
      {user && (<UserInfo {...user} />)}
      <h2 className="list__item-title">{title}</h2>
      <p className="list__item-completed">
        {completed ? 'completed' : 'not completed'}
      </p>
    </>
  );
};
