import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todoItem => (
  {
    ...todoItem,
    user: users.find(person => person.id === todoItem.userId),
  }));

function App() {
  return (
    <div className="App">
      <section className="greating">
        <h1 className="title">TODO</h1>
      </section>
      <div className="statistics">
        <h3>Statistics</h3>

        <p>
          <span>Todos: </span>
          {todos.length}
        </p>

        <p>
          <span>Users: </span>
          {users.length}
        </p>
      </div>
      <section className="list-wrapper">
        <TodoList todoItems={preparedTodos} />
      </section>
    </div>
  );
}

export default App;
