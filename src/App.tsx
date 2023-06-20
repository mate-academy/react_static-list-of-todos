import React from 'react';
import './App.scss';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';

import { TodoList } from './components/TodoList/TodoList';
import { User } from './types/User';
import { Todo } from './types/Todo';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  // if there is no user with a given userId
  return foundUser || null;
}

export const todos: Todo[] = todosFromServer.map(todo => ({
  ...todo,
  user: getUser(todo.userId),
}));

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);

// You are given `todosFromServer` and `usersFromServer` arrays with the required data.

// A `todos` array is based on the `todosFromServer`, but each `todo` has a corresponding user attached. In addition, you have the `Todo` and `User` interfaces already implemented in `./src/types/`.

// Split the given `App` markup into component following the rules:

// - don't change CSS class names, they are used in tests;
// - `TodoList` takes the `todos` and renders one `TodoInfo` per `todo` in the array;
// - `TodoInfo` takes a `todo` and renders its details, including a `todo.user` with `UserInfo` component if the todo has a user;
// - make sure that the `TodoInfo` has a `TodoInfo--completed` modifier for all completed todos;
// - `UserInfo` takes a `user` and renders the details.
