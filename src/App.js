import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map((todo) => {
  const todoCopy = { ...todo };

  todoCopy.user = users.find(user => user.id === todo.userId);
  todoCopy.status = `Status: ${todo.completed ? 'completed' : 'in progress'}`;

  return todoCopy;
});

function App() {
  return (
    <div className="App">
      <h1 className="title">Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
