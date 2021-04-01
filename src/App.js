import React from 'react';
import './App.scss';

import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => (
  {
    ...todo,
    user: users.find(client => client.id === todo.userId),
  }
));

function App() {
  return (
    <div className="App">
      <h1 className="app__title">Static list of todos</h1>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
}

export default App;
