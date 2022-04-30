import React from 'react';
import './App.scss';
import { Users, PreparedTodos } from './types/interfaces';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

export const preparedTodos: PreparedTodos[] = todos.map((item) => (
  {
    ...item,
    user: users.find((person: Users) => (item.userId === person.id)) || null,
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
