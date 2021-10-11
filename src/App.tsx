import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/TodoList';

const preparedTodos = todos.map(todo => {
  const preparedUser = users.find(user => user.id === todo.userId) || null;

  return {
    ...todo,
    user: preparedUser,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Static list of todos</h1>
    <TodoList list={preparedTodos} />
  </div>
);

export default App;
