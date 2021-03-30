import React from 'react';
import './App.scss';

import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = todos.reduce((acc, cur) => {
    const user = users.find(client => client.id === cur.userId);

    return [
      ...acc,
      {
        ...cur,
        user,
      },
    ];
  }, []);

  return (
    <div className="App">
      <h1 className="app__title">Static list of todos</h1>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
}

export default App;
