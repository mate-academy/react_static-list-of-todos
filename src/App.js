import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const task = { ...todo };

  task.user = users.find(user => user.id === todo.userId);

  return task;
});

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todosForList={preparedTodos} />
    </div>
  );
}

export default App;
