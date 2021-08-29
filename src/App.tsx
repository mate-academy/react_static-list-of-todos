import React from 'react';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(item => (
  {
    ...item,

    user: users.find(user => user.id === item.userId) || null,
  }));

const App: React.FC = () => (
  <div className="App">
    <TodoList content={preparedTodos} />
  </div>
);

export default App;
