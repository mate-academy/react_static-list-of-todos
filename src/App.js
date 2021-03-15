import React from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const itemOfNewListofTodos = {
    ...todo,
    user: users[todo.userId - 1],
  };

  return itemOfNewListofTodos;
});

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>
          {`Todos: ${todos.length}`}
        </span>
      </p>

      <p>
        <span>
          {`Users: ${users.length}`}
        </span>
      </p>
      <TodoList
        preparedTodos={preparedTodos}
      />
    </div>
  );
}

export default App;
