import React from 'react';
import './App.scss';
import TodoList from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const copy = {
    ...todo,
    user: users.find(({ id }) => id === todo.userId),
  };

  return copy;
});

function App() {
  return (
    <div className="App">
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
