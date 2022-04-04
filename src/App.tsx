import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';
import { Todo } from './components/Types/Types';

const preparedTodos: Todo[] = todos.map(item => {
  const obj: Todo = { ...item };

  obj.user = users.find(user => user.id === obj.userId);

  return obj;
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
