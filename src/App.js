import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import TodoList from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>
      <p>
        <span>Users: </span>
        {users.length}
      </p>
      <TodoList list={preparedTodos} />
    </div>
  );
}

const preparedTodos = todos.map((todo) => {
  const userFromData = users.find(person => person.id === todo.userId);

  const todoEdited = {
    user: userFromData,
    ...todo,
  };

  return todoEdited;
});

export default App;
