import React from 'react';
import { TodoList } from './components/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const currentUser = users.find(person => person.id === todo.userId);

  return {
    ...todo,
    user: currentUser,
  };
});

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Static list of todos</h1>
      <p className="app__paragraph">
        <span>Todos: </span>
        {todos.length}
      </p>

      <p className="app__paragraph">
        <span>Users: </span>
        {users.length}
      </p>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
