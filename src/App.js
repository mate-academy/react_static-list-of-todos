import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import { Todo } from './components/Todo/Todo';

const preparedTodos = todos.map(todo => ({
  name: users[todo.userId - 1].name,
  username: users[todo.userId - 1].username,
  email: users[todo.userId - 1].email,
  title: todo.title,
  completed: todo.completed,
  id: todo.id,
}));

function App() {
  return (
    <>
      <h1>Static list of todos</h1>
      <div className="todolist">
        {preparedTodos.map(todo => (
          <Todo
            data={todo}
            key={todo.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
