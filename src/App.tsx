import React from 'react';
import './App.scss';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';
import { PreparedTodos, Todos, User } from './types';
import { TodoList } from './components/TodoList';

const preparedTodos: PreparedTodos[] = todosFromServer.map((todo: Todos) => ({
  ...todo,
  user: usersFromServer.find((user: User) => todo.userId === user.id) || null,
}));

const App: React.FC = () => (
  <div className="App p-3 flex-wrap justify-content-evenly">
    <TodoList prepared={preparedTodos} />
  </div>
);

export default App;
