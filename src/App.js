import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = [...todos].map((todo) => {
  const matchedUser = users.find(user => user.id === todo.userId);

  return {
    ...todo, user: { ...matchedUser },
  };
});

function App() {
  return (
    <div className="App">
      <h1>Static Todo List</h1>
      <TodoList list={preparedTodos} />
    </div>
  );
}

export default App;
