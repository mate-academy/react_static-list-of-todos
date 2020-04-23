import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

const preparedTodos = todos.map(toDo => (
  {
    ...toDo,
    user: users.find(user => toDo.userId === user.id),
  }
));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>

      <TodoList list={preparedTodos} />
    </div>
  );
}

export default App;
