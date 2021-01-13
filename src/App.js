import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map((todo) => {
  const user = users.find(person => todo.userId === person.id);
  const item = { ...todo };

  item.user = user.name;

  return item;
});

// console.log(preparedTodos);

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList list={preparedTodos} />
    </div>
  );
}

export default App;
