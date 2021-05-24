import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoLisst/TodoList';

const preparedTodos = todos.map((todo) => {
  const user = users.find(person => person.id === todo.userId);

  const copy = { ...todo };

  copy.user = user;

  return copy;
});

function App() {
  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>
      <TodoList todosArr={preparedTodos} />
    </div>
  );
}

export default App;
