import React from 'react';
import './UserTodosList.scss';

import todos from '../../api/todos';
import users from '../../api/users';

import { Todo, User } from '../../types/types';

import { UserTodosItem } from '../UserTodosItem';

export const UserTodosList: React.FC = () => {
  const getUsersIdLink = (userList: User[] = []) => {
    const usersLink: { [key: number]: User } = {};

    userList.forEach((user: User) => {
      usersLink[user.id] = user;
    });

    return usersLink;
  };

  const getPreparedTodos = (
    userList: User[],
    todoList: Todo[],
  ): Todo[] => {
    const usersLink = getUsersIdLink(userList);

    return todoList.map(
      (todo) => ({
        ...todo,
        user: usersLink[todo.userId] || null,
      }),
    );
  };

  const preparedTodos: Todo[] = getPreparedTodos(users, todos);

  return (
    <>
      {
        users.map(user => (
          <div key={user.id} className="UserTodosItem">
            <UserTodosItem
              user={user}
              todos={preparedTodos}
            />
          </div>
        ))
      }
    </>
  );
};
