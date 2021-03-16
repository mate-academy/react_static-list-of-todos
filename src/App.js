import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(activity => ({
  ...activity,
  user: users.find(user => user.id === activity.userId),
}));

function App() {
  return (
    <div className="App">
      <TodoList activities={preparedTodos} />
    </div>
  );
}

export default App;
