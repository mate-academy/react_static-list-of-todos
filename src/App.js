import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

function findUser(userId) {
  const u = users.find(user => user.id === userId);

  return u.name;
}

const preparedTodos = todos.map(each => (
  {
    ...each,
    user: findUser(each.userId),
  }
));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todo={preparedTodos} />
    </div>
  );
}

export default App;
