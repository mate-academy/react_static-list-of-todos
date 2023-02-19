// Add the required types and props
import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todoItem: Todo
};

// const user1 = {
//   id: 1,
//   name: 'Leanne Graham',
//   username: 'Bret',
//   email: 'Sincere@april.biz',
// };

// const todo = {
//   userId: 1,
//   id: 1,
//   title: 'Learn HTML',
//   completed: true,
//   user: user1,
// };

export const TodoInfo: React.FC<Props> = ({ todoItem }) => {
  const { title, completed, user } = todoItem;

  return (
    <li className={`TodoInfo${completed && ' TodoInfo--completed'}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </li>
  );
};
