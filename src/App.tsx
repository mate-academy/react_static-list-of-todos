import React from 'react';
import './App.scss';

import serverTodos from './api/todos';
import serverUsers from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: Todo[] = serverTodos.map((todo) => ({
  ...todo,
  user: serverUsers.find((user) => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
