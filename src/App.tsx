import React from 'react';
import './App.scss';

import { TodoList } from './components/TodoList/TodoList';

import serverTodos from './api/todos';
import serverUsers from './api/users';

const preparedTodos: Todo[] = serverTodos.map(todo => ({
  ...todo,
  user: serverUsers.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
