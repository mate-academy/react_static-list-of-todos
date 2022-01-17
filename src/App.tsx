import React from 'react';
import { TodoList } from './components/TodoList';

import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos: Todo[] = todos.map((todo) => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
