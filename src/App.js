import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  const preparedTodos = todos.map(todo => (
    {
      ...todo,
      user: users.find(({ id }) => id === todo.userId),
    }
  ));

  return (
    <div className="App">
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
