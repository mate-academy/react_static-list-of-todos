import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => ({
  ...todo,
  user: users.find((user => user.id === todo.userId)) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <TodoList todo={preparedTodos} />
  </div>
);

export default App;
