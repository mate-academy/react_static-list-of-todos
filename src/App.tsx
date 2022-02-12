import React from 'react';
import TodoList from './components/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos
  .map(todo => {
    const user = users.find(u => u.id === todo.userId) || null;

    return {
      ...todo,
      user,
    };
  });

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
