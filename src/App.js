import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map((todo) => {
  const user = users.find(person => person.id === todo.userId);

  return {
    ...todo,
    user,
  };
});

function App() {
  return (
    <div className="App">
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
