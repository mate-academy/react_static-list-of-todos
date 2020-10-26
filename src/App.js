import React from 'react';
import { TodoList } from './components/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(person => (
    person.id === todo.userId
  )),
}));

function App() {
  return (
    <div className="App">
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
