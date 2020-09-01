import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import { Todo } from './components/Todo/Todo';

const preparedTodos = todos.map(todo => (
  {
    ...users.find(current => current.id === todo.userId),
    ...todo,
  }
));

function App() {
  return (
    <>
      <h1>Static list of todos</h1>
      <div className="todolist">
        {preparedTodos.map(todo => (
          <Todo
            {...todo}
            key={todo.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
