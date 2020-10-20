import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map((task) => {
  const taskCopy = { ...task };
  const user = users.find(us => us.id === taskCopy.userId);

  taskCopy.user = user;

  return taskCopy;
});

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <div className="App__list">
        <TodoList src={preparedTodos} />
      </div>
    </div>
  );
}

export default App;
