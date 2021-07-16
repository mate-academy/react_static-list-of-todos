import React from 'react';
import { TodoList } from './components/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(
  todo => ({
    ...todo,
    user: users.find(person => person.id === todo.userId).name,
  }),
);

function App() {
  return (
    <div className="content">
      <h1 className="content__title">List of todos</h1>
      <TodoList listOfTodods={preparedTodos} />
    </div>
  );
}

export default App;
