import React from 'react';

import './App.scss';
import { TodoList } from './components/TodoList/TodoList';
import { TodoOfUser } from './types/Todo';

import todos from './api/todos';
import users from './api/users';

const preparedTodos: TodoOfUser[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
