import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const getUser = id => users.find(user => user.id === id);

function App() {
  const preparedTodos = todos.map(todo => ({
    ...todo,
    user: getUser(todo.userId),
  }));

  return (
    <div className="app">
      <h1 className="h1">Static list of todos</h1>
      <TodoList list={preparedTodos} />
    </div>
  );
}

export default App;
