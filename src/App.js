import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import TodoList from './component/TodoList/TodoList';

const prepareTodo = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1 className="App__title">Static list of todos</h1>
        <p>
          <span>Todos: </span>
          {todos.length}
        </p>

        <p>
          <span>Users: </span>
          {users.length}
        </p>
      </header>

      <section className="todos">
        <TodoList todos={prepareTodo} />
      </section>
    </div>
  );
}

export default App;
