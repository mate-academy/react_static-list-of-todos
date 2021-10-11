import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';
// import { type } from 'os';

const preparedTodos = todos.map(todo => {
  const user = users.find(person => person.id === todo.userId || null);

  return {
    person: (user !== undefined) ? user : null,
    ...todo,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
