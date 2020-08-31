import React from 'react';
import './App.css';
import { TodoList } from './TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const author = users.find(user => user.id === todo.userId);

  return {
    ...todo,
    author,
  };
});

function App() {
  return (
    <div className="App">
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
}

export default App;
