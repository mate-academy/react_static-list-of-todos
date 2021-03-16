import React from 'react';
import { TodoList } from './components/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = todos.map(item => ({
    ...item,
    user: users.find(user => item.userId === user.id),
  }));

  return (
    <div className="App">
      <ul className="list">
        <TodoList todoList={preparedTodos} />
      </ul>
    </div>
  );
}

export default App;
