import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

function App() {
  const preparedTodos = getTodosWithUsers(todos, users);

  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col text-center">
            <h1>Static list of todos</h1>
            <p>
              <span>Todos: </span>
              {todos.length}
            </p>
            <p>
              <span>Users: </span>
              {users.length}
            </p>
          </div>
        </div>
      </div>
      <TodoList todos={preparedTodos} />
    </>
  );
}

function getTodosWithUsers(todos, users) {
  return todos.map(todo => (
    {
      ...todo,
      user: users.find(user => user.id === todo.userId),
    }
  ));
}

export default App;
