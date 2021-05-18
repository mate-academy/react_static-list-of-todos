import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  const preparedTodos = todos.map((todo) => {
    const preparedTodo = {
      ...todo,
      user: users.filter(({ id }) => id === todo.userId)[0],
    };

    return preparedTodo;
  });

  return (
    <div className="App">
      <TodoList todoList={preparedTodos} />
    </div>
  );
}

export default App;
