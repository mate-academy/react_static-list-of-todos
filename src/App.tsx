/* eslint-disable import/no-named-as-default */
import './App.scss';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';

import { Todo } from './types/Todo';
import { User } from './types/User';

import { TodoList } from './components/TodoList';

function getUser(userId: number):User | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

const todos: Todo[] = todosFromServer.map(todo => {
  return {
    ...todo,
    user: getUser(todo.userId),
  };
});

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);
