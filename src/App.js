import React from 'react';
import { TodoList } from './components/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = [...todos]
  .map(
    todo => ({
      ...todo,
      user: users.find(({ id }) => id === todo.userId),
    }),
  );

function App() {
  return (
    <div className="App mx-auto jumbotron" style={{ width: '75%' }}>
      <h1 className="display-4" style={{ textAlign: 'center' }}>
        Static list of todos
      </h1>
      <p className="lead" style={{ textAlign: 'center' }}>
        <span>
          <b>Todos: </b>
          {todos.length}
          {' | '}
        </span>
        <span>
          <b>Users: </b>
          {users.length}
        </span>
      </p>

      <p style={{ textAlign: 'center' }} />
      <hr className="my-4" />
      <TodoList tasks={preparedTodos} />
    </div>
  );
}

export default App;
