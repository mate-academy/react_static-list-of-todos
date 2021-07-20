import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map((todo) => {
  const todoCopy = { ...todo };

  todoCopy.user = users.find(user => (
    todo.userId === user.id
  ));

  return todoCopy;
});

function App() {
  return (
    <div className="App">
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
