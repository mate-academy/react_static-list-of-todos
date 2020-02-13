import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './TodoList/TodoList';

const App = () => {
  const preparedTodos = todos.map(todo => ({
    ...todo,
    user: users.find(user => todo.userId === user.id),
  }));

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
};

export default App;
