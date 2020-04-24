import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList';

const preparedTodos = todos.map(todo => (
  {
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }
));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>

      <div className="container">
        <TodoList todosList={preparedTodos} />
      </div>

    </div>
  );
}

export default App;
