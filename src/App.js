import React from 'react';
import './App.scss';
import { TodosList } from './components/TodosList/TodosList';
import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const todoCopy = { ...todo };

  todoCopy.user = users.find(person => person.id === todo.userId);

  return todoCopy;
});

const App = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <div>
      <TodosList className="list" todos={preparedTodos} />
    </div>
  </div>
);

export default App;
