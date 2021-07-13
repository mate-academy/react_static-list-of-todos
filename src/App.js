import React from 'react';
import { TodoList } from './components/TodoList/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const preparedTodo = { ...todo };
  const todoUser = users.find(user => user.id === todo.userId);

  preparedTodo.user = { ...todoUser };

  return preparedTodo;
});

function App() {
  return (
    <div className="App">
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
}

export default App;
