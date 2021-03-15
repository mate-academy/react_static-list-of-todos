import React from 'react';
import TodoList from './components/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(element => ({
  ...element,
  user: users.find(user => user.id === element.userId),
}));

function App() {
  return (
    <div className="todos">
      <h1 className="todos__heading">Static list of todos</h1>
      <TodoList list={preparedTodos} />
      <div className="todos__statistics">
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
  );
}

export default App;
