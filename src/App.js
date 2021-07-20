import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

function App() {
  const prepearedTodos = todos.map(
    todo => ({
      ...todo,
      user: users.find(member => member.id === todo.userId),
    }),
  );

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <>
        <TodoList className="list" todos={prepearedTodos} />
      </>
    </div>
  );
}

export default App;
