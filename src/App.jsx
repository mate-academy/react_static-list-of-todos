import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map((todo) => {
  const todoCopy = { ...todo };

  todoCopy.user = users.find(user => user.id === todo.userId);

  return todoCopy;
});

function App() {
  return (
    <div className="App">
      <h1 className="display-4">Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
