import React from 'react';
import { TodoList } from './components/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = todos.map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }));

  return (
    <div className="App">
      <TodoList
        lists={preparedTodos}
      />
    </div>
  );
}

export default App;
