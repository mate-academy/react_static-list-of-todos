import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

const usersMap = {};

users.forEach((user) => {
  usersMap[user.id] = { ...user };
});

const preparedTodos = [...todos]
  .map(todo => ({
    ...todo,
    user: usersMap[todo.userId],
  }));

function App() {
  return (
    <div className="App">
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
