import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './TodoList';

const todosWithUser = todos.map((item) => {
  return {
    ...item,
    user: users.find(user => user.id === item.userId),
  };
});

const App = () => (
  <div className="App">
    <h1>List of todos</h1>
    <TodoList todo={todosWithUser} />
  </div>
);

export default App;
