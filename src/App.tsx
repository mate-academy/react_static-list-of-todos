import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { Todo } from './types/Todo';
import { User, UserRequired } from './types/User';

import { UserTodosList } from './components/UserTodosList';

type LinkedObject<T> = { [key: number]: T };

const getPreparedTodos = (todoList: Todo[]): LinkedObject<Todo[]> => {
  const linkedObj: LinkedObject<Todo[]> = {};

  todoList.forEach((todo) => {
    if (!linkedObj[todo.userId]) {
      linkedObj[todo.userId] = [];
    }

    linkedObj[todo.userId].push(todo);
  });

  return linkedObj;
};

const getPreparedUsers = (
  userList: User[], todoList: LinkedObject<Todo[]>,
): UserRequired[] => {
  return userList.map((user: User) => (
    {
      ...user,
      todos: todoList[user.id] || [],
    }
  ));
};

const preparedUsers = getPreparedUsers(users, getPreparedTodos(todos));

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>

      <UserTodosList users={preparedUsers} />
    </div>
  );
};

export default App;
