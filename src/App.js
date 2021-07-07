import React from 'react';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';
import './App.scss';

export const preparedTodos = todos.map((todo) => {
  const currUser = users.find(user => user.id === todo.userId);

  return {
    ...todo,
    user: currUser,
  };
});

function App() {
  return (
    <TodoList preparedTodos={preparedTodos} />
  );
}

export default App;
