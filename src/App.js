import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map((todo) => {
  const user = users.find(curUser => curUser.id === todo.userId);

  return {
    ...todo,
    user: {
      id: user.id,
      name: user.name,
    },
  };
});

function App() {
  return (
    <div className="App">
      <div className="page-content">
        <div className="todo">
          <TodoList todos={preparedTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
