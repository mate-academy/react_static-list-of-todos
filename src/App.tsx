import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
// import { Todo, User } from './types';

const App: React.FC = () => {
  const preparedTodoItems = todos.map((todo) => ({
    ...todo,
    user: users.find((user) => user.id === todo.userId) || null,
  }));

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todoItems={preparedTodoItems} />
    </div>
  );
};

export default App;
