import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const App: React.FC = () => {
  const preparedTodos = todos.map(todo => {
    const user = users.find(person => person.id === todo.userId) || null;

    return { ...todo, user };
  });

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
};

export default App;
