import React from 'react';

import { TodoList } from './components/TodoList';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import todos from './api/todos';
import users from './api/users';

export const preparedTodos = todos.map(
  todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }),
);

function App() {
  return (
    <div className="App container">
      <div>
        <TodoList tasks={preparedTodos} />
      </div>
      <div className="card">
        <div className="card-body">
          <p className="fw-bold text-uppercase">Static list of todos</p>
          <p>
            <p>
              Todos:
              {' '}
              <span className="badge bg-secondary">
                {todos.length}
              </span>
            </p>

          </p>
          <p>
            <p>
              Users:
              {' '}
              <span className="badge bg-secondary">
                {users.length}
              </span>
            </p>
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
