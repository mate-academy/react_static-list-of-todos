import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const user = users.find(people => todo.userId === people.id);

  return {
    ...todo, user,
  };
});

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todoList={preparedTodos} />
    </div>
  );
}

export default App;
