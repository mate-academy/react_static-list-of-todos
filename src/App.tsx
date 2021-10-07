import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './Components/TodoList/TodoList';

const preparedTodos = todos.map(todo => {
  const user = users.find(person => person.id === todo.userId);

  return {
    person: (user !== undefined) ? user : null,
    ...todo,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Static list of todos</h1>
    <div className="list">
      <TodoList todos={preparedTodos} />
    </div>
  </div>
);

export default App;
