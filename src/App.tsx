import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './TodoList';

const App: React.FC = () => {
  const preparedTodos = todos.map((todo) => {
    const user = users.find(({ id }) => id === todo.userId) || null;

    return {
      ...todo,
      user,
    };
  });

  return (
    <TodoList todos={preparedTodos} />
  );
};

export default App;
