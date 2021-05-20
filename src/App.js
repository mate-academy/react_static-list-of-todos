import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';
import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((task) => {
  const user = users.find(person => person.id === task.userId);

  return {
    ...task, user,
  };
});

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
