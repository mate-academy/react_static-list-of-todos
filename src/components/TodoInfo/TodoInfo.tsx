import React from 'react';
import { User } from '../../types/User';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import usersFromServer from '../../api/users';

type Props = {
  todo: Todo;
};

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);
  return foundUser || null;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const user = getUser(todo.userId);

  return (
    <article className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
